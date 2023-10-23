import IssueBanner from "../../../../main_components/issue_banner";
import styles from "../../../../styles/styles.module.css"

export const ShowOneReact = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>React in depth</h1>

          <hr></hr>
          <h1>nothing yet</h1>


        </div>
      </div>
      <IssueBanner />
    </div>
  );
}