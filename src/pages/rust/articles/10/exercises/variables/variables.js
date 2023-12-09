import IssueBanner from "../../../../../../main_components/issue_banner";
import styles from "../../../../../../styles/styles.module.css"
import SubHeading from "../../../../../../main_components/sub_heading";
import FormatCode from "../../../../../../main_components/code_formatter"
export const Variables = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Variables</h1>
          <hr></hr>
          <SubHeading
            text="Problem code: variables1.rs"
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
          <h2>let keyword is used whenever we declare a variable and bind it to a value, NOTE: in rust declaration and binding of
            variable can happen one after another the variable is binded to a type and value.</h2>

          <hr></hr>
          <SubHeading
            text="Problem code: variables2.rs"
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
          <h2>We can declare a variable without initializing it at that time, but we have to initialize it to a value before we use it.</h2>


          <hr></hr>
          <SubHeading
            text="Problem code: variables3.rs"
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
            text="Explaination"
          />
          <h2>Here also the variable was not intialised before we used it.</h2>

          <hr></hr>
          <SubHeading
            text="Problem code: variables4.rs"
          />
          <FormatCode
            code={code_7}
          />
          <SubHeading
            text="Solution code"
          />
          <FormatCode
            code={code_8}
          />
          <SubHeading
            text="Explaination"
          />
          <h2>In rust all variables are immutable by default after initialisation. In order to reassign a new value to a variable we need to make it mutable using mut keyword</h2>


          <hr></hr>
          <SubHeading
            text="Problem code: variables5.rs"
          />
          <FormatCode
            code={code_9}
          />
          <SubHeading
            text="Solution code"
          />
          <FormatCode
            code={code_10}
          />
          <SubHeading
            text="Explaination"
          />
          <h2>When 'number' is declared for the first time, its type is '&str'. Later, attempting to assign it an integer breaks many rules. Firstly, 'number' is not mutable, and it's already bound to a '&str' type. We can use 'let' when assigning '3' to 'number'; this shadows the old variable, allowing us to reuse the name with a different type</h2>


          <hr></hr>
          <SubHeading
            text="Problem code: variables6.rs"
          />
          <FormatCode
            code={code_11}
          />
          <SubHeading
            text="Solution code"
          />
          <FormatCode
            code={code_12}
          />
          <SubHeading
            text="Explaination"
          />
          <h2>Constants in Rust are required to explicitly declare their type, as they are not meant to ever change.
          </h2>


        </div>
      </div>
      <IssueBanner />
    </div>
  );
}

const code_1 = `fn main() {
  x = 5;
  println!("x has the value {}", x);
}`;
const code_2 = `fn main() {
  let x = 5;
  println!("x has the value {}", x);
}`;

const code_3 = `fn main() {
  let x:u32;
  if x == 10 {
      println!("x is ten!");
  } else {
      println!("x is not ten!");
  }
}`;
const code_4 = `fn main() {
  let x:u32 = 0;
  if x == 10 {
      println!("x is ten!");
  } else {
      println!("x is not ten!");
  }
}`;
const code_5 = `fn main() {
  let x: i32;
  println!("Number {}", x);
}`;
const code_6 = `fn main() {
  let x: i32 = 0;
  println!("Number {}", x);
}`;
const code_7 = `fn main() {
  let x = 3;
  println!("Number {}", x);
  x = 5; // don't change this line
  println!("Number {}", x);
}`;
const code_8 = `fn main() {
  let mut x = 3;
  println!("Number {}", x);
  x = 5; // don't change this line
  println!("Number {}", x);
}`;
const code_9 = `fn main() {
  let number = "T-H-R-E-E"; // don't change this line
  println!("Spell a Number : {}", number);
  number = 3; // don't rename this variable
  println!("Number plus two is : {}", number + 2);
}`;
const code_10 = `fn main() {
  let number = "T-H-R-E-E"; // don't change this line
  println!("Spell a Number : {}", number);
  let number = 3; // don't rename this variable
  println!("Number plus two is : {}", number + 2);
}`;
const code_11 = `const NUMBER = 3;
fn main() {
    println!("Number {}", NUMBER);
}`;
const code_12 = `const NUMBER:u32 = 3;
fn main() {
    println!("Number {}", NUMBER);
}`;