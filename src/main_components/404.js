import myImage from "./../img/404.png"
import styles from "./404.module.css"

export const NotFound =  ()=>{
   return (
    <div className={styles.img_container}>
        <h1 className={styles.heading}>PAGE NOT FOUND</h1>
     <img src={myImage} className={styles.cat_logo} styl/>
</div>
   );
}