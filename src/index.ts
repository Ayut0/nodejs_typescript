import express from "express";
// import todosRoutes from "./routes/todos";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema/schema";
import type { Express, Request, Response } from "express";

const app: Express = express();
const port = 3000;

// Apollo server setup
const server = new ApolloServer({ typeDefs, resolvers });

// Express 4 has a built-in body parser.
// No need to install body-parser package.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(todosRoutes);

// app.get("/", (req: Request, res: Response) => res.send("Hello World!"));

(async () => {
  await server.start();
  // Connect Apollo with Express
  server.applyMiddleware({ app });
  app.listen(port, () => {
    console.log(`Node Example app listening on port ${port}!`);
    console.log(
      `GraphQL server ready at http://localhost:${port}${server.graphqlPath}`
    );
  });
})();
