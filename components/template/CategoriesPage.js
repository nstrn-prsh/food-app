import React from "react";
import styles from "./CategoriesPage.module.css";
import { useRouter } from "next/router";
import Card from "../modules/Card";
import Image from "next/image";

const CategoriesPage = ({ data }) => {
   const router = useRouter();
   const [query, setQuery] = useState({ difficulty: "", time: "" });

   useEffect(() => {
      const { difficulty, time } = router.query;
      if (query.difficulty !== difficulty || query.time !== time) {
         setQuery({ difficulty, time });
      }
   }, []);

   const changeHandler = (e) => {
      setQuery({ ...query, [e.target.name]: e.target.value });
   };

   //  /categories?difficulty=Hard&time=more
   const searchHandler = (e) => {
      router.push({
         pathname: "/categories",
         query,
         // query: { difficulty: "", time: "" }
      });
   };

   return (
      <div className={styles.container}>
         <h2>CategoriesPage</h2>
         <div className={styles.subContainer}>
            <div className={styles.select}>
               <select
                  value={query.difficulty}
                  onChange={changeHandler}
                  name='Difficulty'
                  id=''
               >
                  <option value='Easy'>Easy</option>
                  <option value='Medium'>Medium</option>
                  <option value='Hard'>Hard</option>
               </select>
               <select
                  value={query.time}
                  onChange={changeHandler}
                  name='Cooking Time'
                  id=''
               >
                  <option value='More'>More than 30 minutes</option>
                  <option value='Less'>Less that 30 minutes</option>
               </select>
               <button onClick={searchHandler}>search</button>
            </div>
            <div className={styles.cards}>
               {!data.length && (
                  <Image src='/images/search.png' alt='Category' />
               )}
               {data.map((food) => (
                  <Card key={food.id} {...food} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default CategoriesPage;
