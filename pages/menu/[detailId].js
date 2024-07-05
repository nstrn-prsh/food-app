import { useRouter } from "next/router";
import React from "react";
import DetailsPage from "../../components/template/DetailsPage";

const Detail = ({ data }) => {
   const router = useRouter();

   if (router.isFallback) {
      return <p>loading ...</p>;
   }

   return <DetailsPage {...data} />;
};

export default Detail;

export async function getStaticPaths() {
   const res = await fetch(`${process.env.BASE_URL}/data`);
   const data = await res.json();
   const json = data.slice(0, 10);

   const paths = json.map((food) => ({
      params: { detailId: `${food.id}` },
   }));

   return {
      paths,
      fallback: true,
   };
}

export async function getStaticProps(context) {
   const {
      params: { detailId },
   } = context;
   const res = await fetch(`${process.env.BASE_URL}/data/${detailId}`);
   const data = await res.json();

   if (!data.id) {
      return { notFound: true };
   }

   return {
      props: { data },
      revalidate: 10,
   };
}
