import connectDB from "@/utils/connectDB";
import User from "models/User";
import React from "react";

const SSR = ({ users }) => {
   return <div>SSR</div>;
};

export default SSR;

export async function gerServerSideProps() {
   try {
      await connectDB();
      const users = await User.find();
      return {
         props: { users: Json.parse(JSON.stringify(users)) },
      };
   } catch (err) {
      return {
         notFound: true,
      };
   }
}
