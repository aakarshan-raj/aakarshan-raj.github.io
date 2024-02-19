import IssueBanner from '../../../main_components/issue_banner';
import styles from '../../../styles/styles.module.css';
import { Link } from 'react-router-dom';



export const ShowGraph = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>GRAPHS</h1>

          <hr></hr>
          <h1>1.<Link to={"/graph/one"}>Path between two vertices</Link></h1>
          <h1>2.<Link to={"/graph/two"}>Number of connected components in a Graph</Link></h1>
          <h1>3.<Link to={"/graph/three"}>Directed acyclic graph(DAG)</Link></h1>
          
        </div>
      </div>
      <IssueBanner />
    </div>
  );
}