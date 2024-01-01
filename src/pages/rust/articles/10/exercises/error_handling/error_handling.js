import IssueBanner from "../../../../../../main_components/issue_banner";
import styles from "../../../../../../styles/styles.module.css"
import FormatCode from "../../../../../../main_components/code_formatter"
import SubHeading from "../../../../../../main_components/sub_heading"

export const ErrorHandling = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>ErrorHandling</h1>
          <hr></hr>

          <SubHeading text="Problem code: errors1.rs" />
          <FormatCode code={code_1} />
          <SubHeading text="Solution code" />
          <FormatCode code={code_2} />
          <SubHeading text="Explanation" />
          <h2></h2>
          <hr>
          </hr>

          <SubHeading text="Problem code: errors2.rs" />
          <FormatCode code={code_3} />
          <SubHeading text="Solution code" />
          <FormatCode code={code_4} />
          <SubHeading text="Explanation" />
          <h2></h2>
          <h2></h2>
          <hr>
          </hr>

          <SubHeading text="Problem code: errors3.rs" />
          <FormatCode code={code_5} />
          <SubHeading text="Solution code" />
          <FormatCode code={code_6} />
          <SubHeading text="Explanation" />
          <h2></h2>
          <hr>
          </hr>





          <SubHeading text="Problem code: errors4.rs" />
          <FormatCode code={code_7} />
          <SubHeading text="Solution code" />
          <FormatCode code={code_8} />
          <SubHeading text="Explanation" />
          <h2></h2>
          <hr>
          </hr>
          <SubHeading text="Problem code: errors5.rs" />
          <FormatCode code={code_9} />
          <SubHeading text="Solution code" />
          <FormatCode code={code_10} />
          <SubHeading text="Explanation" />
          <h2></h2>
          <hr>
          </hr>
          <SubHeading text="Problem code: errors6.rs" />
          <FormatCode code={code_11} />
          <SubHeading text="Solution code" />
          <FormatCode code={code_12} />
          <SubHeading text="Explanation" />
          <h2></h2>
          <hr>
          </hr>

        </div>
      </div>
      <IssueBanner />
    </div>
  );
}


const code_1 = ``;
const code_2 = ``;
const code_3 = ``;
const code_4 = ``;
const code_5 = ``;
const code_6 = ``;
const code_7 = ``;
const code_8 = ``;
const code_9 = ``;
const code_10 = ``;
const code_11 = ``;
const code_12 = ``;