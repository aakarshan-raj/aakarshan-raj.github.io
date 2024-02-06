import IssueBanner from '../../../main_components/issue_banner';
import styles from '../../../styles/styles.module.css';
import { Link } from 'react-router-dom';



export const ShowGraph = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>ASSEMBLY</h1>

          <hr></hr>
          <h1>1.<Link to={"/graph/one"}>Graphs one</Link></h1>

        </div>
      </div>
      <IssueBanner />
    </div>
  );
}