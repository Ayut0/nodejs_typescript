import { Router } from "express";
import type { Todo } from "../models/todo";

type RequestBody = { text: string };
type RequestParams = { todoId: string };

let todos: Todo[] = [];

const router = Router();

// get
router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

// create
router.post("/todo", (req, res, next) => {
  const body: RequestBody = req.body;
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: body.text,
  };

  todos.push(newTodo);
  return res.status(200).json({ message: "Todo added", todos: todos });
});

// update
router.put("/todo/:todoId", (req, res, next) => {
  const params: RequestParams = req.params;
  const todoId = params.todoId;
  const body: RequestBody = req.body;
  const todoIndex = todos.findIndex((todoItem) => todoItem.id === todoId);

  if (todoIndex >= 0) {
    todos[todoIndex] = {
      id: todos[todoIndex].id,
      text: body.text,
    };
    return res.status(200).json({ message: "Todo updated", todos: todos });
  }
  res.status(404).json({ message: "Could not find todo for this id" });
});

// delete
router.delete("/todo/:todoId", (req, res, next) => {
  const params: RequestParams = req.params;
  const todoId = params.todoId;
  todos = todos.filter((todoItem) => todoItem.id !== todoId);
  res.status(200).json({ message: "Todo deleted", todos: todos });
});

export default router;
