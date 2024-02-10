import { Link } from 'react-router-dom';
import styles from "../../styles/styles.module.css"
import IssueBanner from '../../main_components/issue_banner';

export const ShowRust = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Rust</h1>

          <hr></hr>
          <h1>1. <Link to="/rust/one">Ownership concept in Rust</Link></h1>
          <h1>2. <Link to="/rust/two">Borrowing concept in Rust</Link></h1>
          <h1>3. <Link to="/rust/three">Traits in Rust </Link></h1>
          <h1>4. <Link to="/rust/four">Chat Server in Rust(tokio) </Link></h1>
          <h1>5. <Link to="/rust/five">Clone and Copy Traits</Link></h1>
          <h1>6. <Link to="/rust/six">Making GUI application with ICED in Rust</Link></h1>
          <h1>7. <Link to="/rust/seven">Threads in Rust</Link></h1>
          <h1>8. <Link to="/rust/eight">Function parameter matching</Link></h1>
          <h1>9. <Link to="/rust/nine">Debugging Rust Binary</Link></h1>
          <h1>10. <Link to="/rust/ten">Rustlings Solution and Explaination</Link></h1>


          <IssueBanner />


        </div>
      </div>
    </div>
  );
}