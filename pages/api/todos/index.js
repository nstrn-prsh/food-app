import { todos } from "../../../data/todos";

// localhost:3000/api/todos
export default function handler(req, res) {
   if (req.method === "GET") {
      res.status(200).json(todos);
   } else if (req.method === "POST") {
      const { todo } = req.body;
      //   store data in a db
      const newTodo = {
         id: todos.length + 1,
         title: todo,
      };
      res.status(201).json({
         message: "success",
         info: newTodo,
      });
   } else if (req.method === "DELETE") {
      res.status(200).json({
         message: "success",
         info: [],
      });
   } else if (req.method === "PUT") {
      res.status(200).json({
         message: "success",
         info: req.body,
      });
   }
}
