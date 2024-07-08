import User from "models/User";

export default async function handler(req, res) {
   try {
      await connectDB();
   } catch (err) {
      res.status(500).json({
         status: "failed",
         message: "error in connecting to db",
      });
      return;
   }

   const id = req.query.userId;
   if (req.method === "GET") {
      try {
         const userData = await User.findById(id);
         //  const userData = await User.find({name: "anthffk"});
         res.status(200).json({ status: "success", data: userData });
      } catch (error) {
         res.status(500).json({ message: "error" });
      }
   } else if (req.method === "PATCH") {
      try {
         const userData = await User.findById(id);
         userData.email = req.body.email;
         await userData.save();
         //  const userData = await User.find({name: "anthffk"});
         res.status(200).json({ status: "success", data: userData });
      } catch (error) {
         res.status(500).json({ message: "error" });
      }
   } else if (req.method === "DELETE") {
      try {
         const userData = await User.findOneAndDelete({ _id: id });
         res.status(200).json({ status: "success" });
      } catch (error) {
         res.status(500).json({ message: "error" });
      }
   }
}
