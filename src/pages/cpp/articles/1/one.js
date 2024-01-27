import IssueBanner from "../../../../main_components/issue_banner";
import styles from "../../../../styles/styles.module.css"
import FormatCode from "../../../../main_components/code_formatter"

export const ShowOneCpp = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Shared Pointers in CPP</h1>
          <hr></hr>
        </div>
      </div>
      <IssueBanner />
    </div>
  );
}