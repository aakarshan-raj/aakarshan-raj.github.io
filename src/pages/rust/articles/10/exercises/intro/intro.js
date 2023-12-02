import IssueBanner from "../../../../../../main_components/issue_banner";
import styles from "../../../../../../styles/styles.module.css"
import FormatCode from "../../../../../../main_components/code_formatter"

export const Intro = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Intro</h1>
          <hr></hr>
          <div className={styles.sub_heading}>Problem code</div>
          <div className={styles.sub_heading}>Solution code</div>
          <div className={styles.sub_heading}>Explaination</div>
        </div>
      </div>
      <IssueBanner />
    </div>
  );
}
