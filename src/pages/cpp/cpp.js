import IssueBanner from '../../main_components/issue_banner';
import styles from '../../styles/styles.module.css';
import { Link } from 'react-router-dom';



export const ShowCpp = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>C++</h1>

          <hr></hr>
          <h1>1. <Link to="/cpp/one">Shared Pointers in C++</Link></h1>
          <h1>2. <Link to="/cpp/two">ECS Design Pattern</Link></h1>
          <h1>3. <Link to="/cpp/three">Making Chess with SFML and ECS Design Pattern</Link></h1>

        </div>
      </div>
      <IssueBanner/>
    </div>
  );
}