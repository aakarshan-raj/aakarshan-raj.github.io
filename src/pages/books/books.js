import styles from './styles.module.css';



export const ShowBooks = ()=>{
    return (
      <div className={styles.book_container}>
          <div className={styles.book}>
            <div className={styles.book_content}>
            <h1 className={styles.title}>Book</h1>
           
            <hr></hr>
            <h1>No Article</h1>
         
            
            </div>
          </div>
        </div>
      );
}