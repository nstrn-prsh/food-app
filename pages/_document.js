import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
   return (
      <Html lang='en'>
         //lang ="fa" dir="rtl"
         <Head>
            <meta name='author' content='Milad Azami' />
         </Head>
         <body>
            <h1>document yek laye balatar az app hast</h1>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
