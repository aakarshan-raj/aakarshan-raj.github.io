
import styles from "./styles.module.css"
import myImage from "./assets/logo.png"


export const ShowOneNodejs = ()=>{
    return (
      <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
        <h1 className={styles.title}>Setting Up Mongoose in Nodejs</h1>
          
            <hr></hr>

            <div className={styles.img_container}>
             <img src={myImage} className={styles.logo}/>
            </div>
            
            <h1>Nothing yet</h1>
         
            
            </div>
          </div>
        </div>
      );
}

