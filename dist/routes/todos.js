"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
// get
router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
// create
router.post("/todo", (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text,
    };
    todos.push(newTodo);
    return res.status(200).json({ message: "Todo added", todos: todos });
});
// update
router.put("/todo/:todoId", (req, res, next) => {
    const params = req.params;
    const todoId = params.todoId;
    const body = req.body;
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
    const params = req.params;
    const todoId = params.todoId;
    todos = todos.filter((todoItem) => todoItem.id !== todoId);
    res.status(200).json({ message: "Todo deleted", todos: todos });
});
exports.default = router;
