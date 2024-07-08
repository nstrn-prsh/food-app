import connectDB from "@/utils/connectDB";
import User from "models/User";
import mongoose from "mongoose";

// localhost:3000/api/data

export default async function handler(req, res) {
   try {
      await connectDB();
   } catch (err) {
      res.status(500).json({
         status: "failed",
         message: "Error in connecting to DB",
      });
      return;
   }

   if (req.method === "POST") {
      const name = req.body.name;
      if (!name || name.length <= 3) {
         res.status(422).json({ status: "failed", message: "Invalid Data" });
         return;
      }

      /*   mongoose.connect(
         "mongodb://nastaranpsh77:azUKusQn9aEhJrs3@gettingtoknowmongo.7myca9z.mongodb.net/",
         () => console.log("connected to db")
      ); */

      /*   const user = new User({name})
      await user.save() */

      try {
         const user = await User.create({ name, age, email, address });
         console.log(user);

         res.status(201).json({
            status: "success",
            message: "Data Created",
            data: user,
         });
      } catch (err) {
         res.status(500).json({
            status: "failed",
            message: "Error in connecting to DB",
         });
      }
   }
   if (req.method === "GET") {
      try {
         const users = await User.find();
         res.status(200).json({ message: "success", data: users });
      } catch (error) {
         res.status(500).json({ message: "error" });
      }
   }
}
