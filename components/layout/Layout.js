import Link from "next/link";
import React, { Children } from "react";
import style from "./Layout.module.css"; 

const Layout = ({ children }) => {
   return (
      <>
         <header className={style.header}>
            <div className={style.left}>
               <Link href='/'>Boto Food</Link>
            </div>
            <div className={style.right}>
               <Link href='/menu'>Menu</Link>
               <Link href='/categories'>Categories</Link>
            </div>
         </header>
         <div className={style.container}>{children}</div>
         <footer className={style.footer}>
            <a href='#' target='_blank' rel='noreferrer'>
               A link
            </a>
            Next practice project
         </footer>
      </>
   );
};

export default Layout;
