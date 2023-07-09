import styles from "./styles.module.css"
import image from "./assets/1.png"
export const ShowFourRust = ()=>{
    return (
      <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
        <h1 className={styles.title}>Making a Chat Server in Rust using Tokio</h1>
          <hr></hr>
            <div className={styles.content}>
        
        <h2>Every langauage </h2>

            <img src={image} />

        

         
            </div>
             


            
            </div>
          </div>
        </div>
      );
}

