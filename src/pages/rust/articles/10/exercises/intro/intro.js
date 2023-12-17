import IssueBanner from "../../../../../../main_components/issue_banner";
import SubHeading from "../../../../../../main_components/sub_heading";
import styles from "../../../../../../styles/styles.module.css"
import FormatCode from "../../../../../../main_components/code_formatter"

export const Intro = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Intro</h1>
          <hr></hr>
          <SubHeading
            text="Problem code"
          />
          <FormatCode
            code={code_1}
          />
          <SubHeading
            text="Solution code"
          />
          <FormatCode
            code={code_2}
          />
          <SubHeading
            text="Explanation"
          />
          <h2>There is no function such as printline, to print output buffer to console we have println or print.</h2>
        </div>
      </div>
      <IssueBanner />
    </div>
  );
}

const code_1 = `fn main() {
  printline!("Hello there!")
}`;
const code_2 = `fn main() {
  println!("Hello there!");
}`;