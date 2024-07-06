import Head from "next/head";
import HomePage from "../components/template/HomePage";

export default function Home({ data }) {
   return (
      <>
         <Head>
            <title>{data.title}</title>
            <meta name=' description' content={data.description} />
         </Head>
         <HomePage />
      </>
   );
}

export async function getServerSideProps() {
   return {
      props: {
         data: {
            name: "nas",
            title: "my router api food next app",
            description: "test dynamic head",
         },
      },
   };
}
