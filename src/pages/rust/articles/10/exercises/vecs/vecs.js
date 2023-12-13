import IssueBanner from "../../../../../../main_components/issue_banner";
import styles from "../../../../../../styles/styles.module.css"
import FormatCode from "../../../../../../main_components/code_formatter"
import SubHeading from "../../../../../../main_components/sub_heading";


export const Vecs = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Vectors</h1>
          <hr></hr>

          <SubHeading
            text="Problem code: vec1.rs"
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
            text="Explaination"
          />
         <h2></h2>


         <SubHeading
            text="Problem code: vec2.rs"
          />
          <FormatCode
            code={code_3}
          />
          <SubHeading
            text="Solution code"
          />
          <FormatCode
            code={code_4}
          />
          <SubHeading
            text="Explaination"
          />
         <h2></h2>

        </div>
      </div>
      <IssueBanner />
    </div>
  );
}


const code_1 = `fn array_and_vec() -> ([i32; 4], Vec<i32>) {
  let a = [10, 20, 30, 40]; // a plain array
  let v = // TODO: declare your vector here with the macro for vectors

  (a, v)
}`;
const code_2 = ``;
const code_3 = `fn vec_loop(mut v: Vec<i32>) -> Vec<i32> {
  for element in v.iter_mut() {
      ???
  }

  v
}

fn vec_map(v: &Vec<i32>) -> Vec<i32> {
  v.iter().map(|element| {
      // TODO: Do the same thing as above - but instead of mutating the
      // Vec, you can just return the new number!
      ???
  }).collect()
}`;
const code_4 = ``;
