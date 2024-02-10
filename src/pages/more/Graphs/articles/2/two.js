import IssueBanner from "../../../../../main_components/issue_banner";
import FormatCode from "../../../../../main_components/code_formatter"
import styles from "../../../../../styles/styles.module.css"
import SubHeading from "../../../../../main_components/sub_heading";


export const ShowTwoGraph = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Number of connected components in a Graph</h1>
          <hr />

        </div>
      </div>
      <IssueBanner />
    </div>
  );
}
