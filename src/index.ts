import express from "express";
import todosRoutes from "./routes/todos";
import type { Express, Request, Response } from "express";

const app: Express = express();
const port = 3000;

// Express 4 has a built-in body parser.
// No need to install body-parser package.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(todosRoutes);

// app.get("/", (req: Request, res: Response) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Node Example app listening on port ${port}!`)
);
