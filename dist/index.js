"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import todosRoutes from "./routes/todos";
const apollo_server_express_1 = require("apollo-server-express");
const schema_1 = require("./schema/schema");
const container_1 = __importDefault(require("./containers/container"));
const app = (0, express_1.default)();
const PORT = 3000;
// Apollo server setup
const server = new apollo_server_express_1.ApolloServer({ typeDefs: schema_1.typeDefs, resolvers: schema_1.resolvers });
// Express 4 has a built-in body parser.
// No need to install body-parser package.
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// app.use(todosRoutes);
// app.get("/", (req: Request, res: Response) => res.send("Hello World!"));
const userController = container_1.default.resolve("userController");
app.post("/api/post", userController.createUser.bind(userController));
app.get("/api/users/:id", userController.getUser.bind(userController));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// For GraphQL
// (async () => {
//   await server.start();
//   // Connect Apollo with Express
//   server.applyMiddleware({ app });
//   app.listen(PORT, () => {
//     console.log(`Node Example app listening on port ${port}!`);
//     console.log(
//       `GraphQL server ready at http://localhost:${port}${server.graphqlPath}`
//     );
//   });
// })();
