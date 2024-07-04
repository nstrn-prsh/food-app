import React from "react";
import MenuPage from "../../components/template/MenuPage";

const Menu = ({ data }) => {
   return (
      <>
         <MenuPage data={data} />
      </>
   );
};

export default Menu;

export async function getStaticProps() {
   const res = await fetch(`${process.env.BASE_URL}/data`);
   const data = await res.json();

   return {
      props: { data },
      revalidate: 60 * 60, //seconds ===> 1 saat
   };
}
