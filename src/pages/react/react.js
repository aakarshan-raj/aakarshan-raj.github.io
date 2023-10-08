import styles from "../../styles/styles.module.css"
import { Link } from 'react-router-dom';



export const ShowReact = ()=>{
    return (
      <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
        <h1 className={styles.title}>React</h1>
       
            <hr></hr>
            <h1>1.<Link to={"/react/one"}>React in Depth</Link></h1>
         
            
            </div>
          </div>
        </div>
      );
}