import Link from "next/link";
import styles from "./Card.module.css";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";

function Card(props) {
   const { id, title, userId, body } = props;

   const discount = id * userId;

   return (
      <div className={styles.container}>
         <img src={`/images/${id}.jpeg`} alt={title} />
         <div className={styles.details}>
            <h4>{title}</h4>
            <div>
               <Location />
               {body[0].Cuisine}
            </div>
         </div>
         <div className={styles.price}>
            <Dollar />
            {discount ? (
               <span className={styles.discount}>
                  {(userId * (100 - discount)) / 100}$
               </span>
            ) : (
               <span>{userId}$</span>
            )}
            {discount ? <div className={styles.badge}>{discount}%</div> : null}
         </div>
         <Link href={`/menu/${id}`}>See Details</Link>
      </div>
   );
}

export default Card;
