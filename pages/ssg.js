import User from "models/User";
import React from "react";

const SSG = ({ users }) => {
   return <div>ssg</div>;
};

export default SSG;

export async function getStaticProps() {
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
