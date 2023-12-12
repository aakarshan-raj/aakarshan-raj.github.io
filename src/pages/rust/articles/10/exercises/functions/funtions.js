import IssueBanner from "../../../../../../main_components/issue_banner";
import styles from "../../../../../../styles/styles.module.css"
import FormatCode from "../../../../../../main_components/code_formatter"
import SubHeading from "../../../../../../main_components/sub_heading";

export const Functions = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Functions</h1>
          <hr></hr>
          <SubHeading
            text="Problem code: function1.rs"
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
          <h2>we were calling a function that didn't existed, This function took no parameters. So we created one function that takes no argument and returns nothing. In rust the declaration and defination of user-defined function can take anywhere(after main or before) we dont need to specify that a function exists like in C/C++</h2>
          <hr></hr>

          <SubHeading
            text="Problem code: function2.rs"
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
          <h2>we main we are calling the function `call_me` and passing a integer as argument, in the defination of function we haven't specified what type of paramter call_me takes.
            In rust this can be done in function defination as: (name_of_variable:type,...)</h2>
          <hr></hr>


          <SubHeading
            text="Problem code: function3.rs"
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
          <h2>No argument was passed when invoking call_me</h2>
          <hr></hr>


          <SubHeading
            text="Problem code: function4.rs"
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
          <h2>`sale_price` was returning a number but in its defination the return type was empty, we can use i32(signed 32 integer) as a return type here.
          </h2>
          <hr></hr>


          <SubHeading
            text="Problem code: function5.rs"
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
          <h2>In rust functions we can either use `return` keyword or not use `;` at the end of expression when we want to return something, expressions always produce values and without semicolon we can return it.
          </h2>
          <hr></hr>



        </div>
      </div>
      <IssueBanner />
    </div>
  );
}

const code_1 = `fn main() {
  call_me();
}`;
const code_2 = `fn main() {
  call_me();
}

fn call_me(){}`;
const code_3 = `fn main() {
  call_me(3);
}

fn call_me(num:) {
  for i in 0..num {
      println!("Ring! Call number {}", i + 1);
  }
}`;
const code_4 = `fn main() {
  call_me(3);
}

fn call_me(num:i32) {
  for i in 0..num {
      println!("Ring! Call number {}", i + 1);
  }
}`;
const code_5 = `fn main() {
  call_me();
}

fn call_me(num: u32) {
  for i in 0..num {
      println!("Ring! Call number {}", i + 1);
  }
}`;
const code_6 = `fn main() {
  call_me(10);
}

fn call_me(num: u32) {
  for i in 0..num {
      println!("Ring! Call number {}", i + 1);
  }
}`;
const code_7 = `fn main() {
  let original_price = 51;
  println!("Your sale price is {}", sale_price(original_price));
}

fn sale_price(price: i32) ->  {
  if is_even(price) {
      price - 10
  } else {
      price - 3
  }
}

fn is_even(num: i32) -> bool {
  num % 2 == 0
}`;
const code_8 = `fn main() {
  let original_price = 51;
  println!("Your sale price is {}", sale_price(original_price));
}

fn sale_price(price: i32) -> i32 {
  if is_even(price) {
      price - 10
  } else {
      price - 3
  }
}

fn is_even(num: i32) -> bool {
  num % 2 == 0
}`;
const code_9 = `fn main() {
  let answer = square(3);
  println!("The square of 3 is {}", answer);
}

fn square(num: i32) -> i32 {
  num * num;
}`;
const code_10 = `fn main() {
  let answer = square(3);
  println!("The square of 3 is {}", answer);
}

fn square(num: i32) -> i32 {
  num * num
}`;
