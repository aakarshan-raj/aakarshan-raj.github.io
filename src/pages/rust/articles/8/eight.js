import IssueBanner from "../../../../main_components/issue_banner";
import styles from "../../../../styles/styles.module.css"
import FormatCode from "../../../../main_components/code_formatter"

export const ShowEightRust = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Function parameter matching</h1>
          <hr></hr>
          <div className={styles.content}>
          </div>
        </div>
      </div>
      <IssueBanner />
    </div>
  );
}
