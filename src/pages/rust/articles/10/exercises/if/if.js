import IssueBanner from "../../../../../../main_components/issue_banner";
import styles from "../../../../../../styles/styles.module.css"
import FormatCode from "../../../../../../main_components/code_formatter"
import SubHeading from "../../../../../../main_components/sub_heading";

export const If = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>If</h1>
          <hr></hr>
          <SubHeading
            text="Problem code: if1.rs"
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
          <h2>Compare a is greater than b and return a if true, else return b. </h2>
          <hr></hr>

          <SubHeading
            text="Problem code: if2.rs"
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
            text="Explanation"
          />
          <h2>The return type needs to be same (&str), and the condition depends on the tests. </h2>
          <hr></hr>

          <SubHeading
            text="Problem code: if3.rs"
          />
          <FormatCode
            code={code_5}
          />
          <SubHeading
            text="Solution code"
          />
          <FormatCode
            code={code_6}
          />
          <SubHeading
            text="Explanation"
          />
          <h2> We are making use of 'if let' to determine value for variable `identifier`, the type of identifier can only be one and its determined by compiler as we are not explicitly writing it, the return type needs to be same but its of 3 types: integer,float,&str. Making it same solves this.</h2>
          <hr></hr>



        </div>
      </div>
      <IssueBanner />
    </div>
  );
}

const code_1 = `pub fn bigger(a: i32, b: i32) -> i32 {
  // Complete this function to return the bigger number!
  // Do not use:
  // - another function call
  // - additional variables
}`;
const code_2 = `pub fn bigger(a: i32, b: i32) -> i32 {
  if a > b {
      return a;
  }
  b
}`;
const code_3 = `pub fn foo_if_fizz(fizzish: &str) -> &str {
  if fizzish == "fizz" {
      "foo"
  } else {
      1
  }
}`;
const code_4 = `pub fn foo_if_fizz(fizzish: &str) -> &str {
  if fizzish == "fizz" {
      "foo"
  } else if fizzish == "fuzz" {
      "bar"
  } else {
      "baz"
  }
}`;
const code_5 = `pub fn animal_habitat(animal: &str) -> &'static str {
  let identifier = if animal == "crab" {
      1
  } else if animal == "gopher" {
      2.0
  } else if animal == "snake" {
      3
  } else {
      "Unknown"
  };

  // DO NOT CHANGE THIS STATEMENT BELOW
  let habitat = if identifier == 1 {
      "Beach"
  } else if identifier == 2 {
      "Burrow"
  } else if identifier == 3 {
      "Desert"
  } else {
      "Unknown"
  };

  habitat
}`;
const code_6 = `pub fn animal_habitat(animal: &str) -> &'static str {
  let identifier = if animal == "crab" {
      1
  } else if animal == "gopher" {
      2
  } else if animal == "snake" {
      3
  } else {
      4
  };

  // DO NOT CHANGE THIS STATEMENT BELOW
  let habitat = if identifier == 1 {
      "Beach"
  } else if identifier == 2 {
      "Burrow"
  } else if identifier == 3 {
      "Desert"
  } else {
      "Unknown"
  };

  habitat
}`;