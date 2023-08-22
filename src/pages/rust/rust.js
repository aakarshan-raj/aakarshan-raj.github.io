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
            <h1><Link to="/rust/two">2. Borrowing concept in Rust</Link></h1>
            <h1><Link to="/rust/three">3. Traits in Rust </Link></h1>
            <h1><Link to="/rust/four">4. Chat Server in Rust(tokio) </Link></h1>
            <h1><Link to="/rust/five">4. Clone and Copy Traits</Link></h1>

            
            </div>
          </div>
        </div>
      );
}