import { useEffect } from "react";
import catTwo from "./../img/404_test.jpg"
import styles from "./404.module.css"

export const NotFound = (props) => {
   const title = "";
   useEffect(() => {
      props.setTitle(title)
   }, []);
   return (
      <>
         <div className={styles.img_container}>
            <h1 className={styles.heading}>PAGE NOT FOUND</h1>
            <img src={catTwo} className={styles.cat_logo} styl />
         </div>
      </>
   );
}