import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export const ShowRust = ()=>{
    return (
      <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
        <h1 className={styles.title}>Rust</h1>
       
            <hr></hr>
            <h1><Link to="/rust/one">1. Ownership concept in Rust</Link></h1>
            <h1><Link to="/rust/two">1. Borrowing concept in Rust</Link></h1>

            
            </div>
          </div>
        </div>
      );
}