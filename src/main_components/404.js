import { useEffect } from "react";
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
            <h1>404</h1>
         </div>
      </>
   );
}