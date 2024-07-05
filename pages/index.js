import Link from "next/link";
import HomePage from "../components/template/HomePage";

export default function Home() {
   return (
      <>
         <Link href={`/todos`}>Meet Api Routes</Link>
         <HomePage />
      </>
   );
}
