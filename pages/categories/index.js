import React from "react";
import CategoriesPage from "../../components/template/CategoriesPage";

const Categories = ({ data }) => {
   return (
      <>
         <CategoriesPage data={data} />
      </>
   );
};

export default Categories;

/* 
 "details": [
        { "Cuisine": "Middle Eastern" },
        { "Recipe Type": "Eggs" },
        { "Difficulty": "Easy" },
        { "Preparation Time": "20 mins" },
        { "Cooking Time": "5 mins" },
        { "Serves": "6" }
      ],
*/

export async function getServerSideProps(context) {
   const {
      query: { difficulty, time },
   } = context;

   const res = await fetch(`${process.env.BASE_URL}/data`);
   const data = await res.json();

   const filteredData = data.filter((item) => {
      const difficultyResult = item.details.filter(
         (details) => details.Difficulty && Details.difficulty === difficulty
      );

      const timeResult = item.details.filter((detail) => {
         const cookingTime = detail["Cooking Time"] || "";
         const [timeDetail] = cookingTime.split(" ");
         if (
            (time === "less" && timeDetail && +timeDetail <= 30) ||
            (time === "more" && +timeDetail > 30)
         )
            return detail;
      });

      if (
         (time && difficulty && timeResult.length && difficultyResult.length) ||
         (!time && difficulty && difficultyResult.length) ||
         (time && !difficulty && timeResult.length)
      )
         return item;
   });

   return { props: { data: filteredData } };
}
