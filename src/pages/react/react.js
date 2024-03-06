import IssueBanner from "../../main_components/issue_banner";
import styles from "../../styles/styles.module.css"
import { Link } from 'react-router-dom';



export const ShowReact = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>React</h1>

          <hr></hr>
          <h1>1.<Link to={"/react/one"}>React in Depth</Link></h1>
          <h1>2.<Link to={"/react/two"}>Migrating from Javascript to Typescript in react</Link></h1>


        </div>
      </div>
      <IssueBanner />
    </div>
  );
}