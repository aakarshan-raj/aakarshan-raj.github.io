import styles from './styles.module.css';
import { Link } from 'react-router-dom';

export const ShowNodejs = ()=>{
    return (
      <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
        <h1 className={styles.title}>NodeJs</h1>
       
       
            <hr></hr>
            <h1>1.<Link to={"/nodejs/one"}>Setting up Mongoose with NodeJs</Link></h1>
            <h1>1.<Link to={"/nodejs/two"}>Using Mongoose in NodeJs.</Link></h1>

            
            </div>
          </div>
        </div>
      );
}