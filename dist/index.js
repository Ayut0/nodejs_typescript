"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
const port = 3000;
// Express 4 has a built-in body parser.
// No need to install body-parser package.
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(todos_1.default);
// app.get("/", (req: Request, res: Response) => res.send("Hello World!"));
app.listen(port, () => console.log(`Node Example app listening on port ${port}!`));
