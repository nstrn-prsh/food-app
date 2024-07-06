import Head from "next/head";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
   return (
      <>
         <Head>
            <title>boto start</title>
         </Head>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </>
   );
}
