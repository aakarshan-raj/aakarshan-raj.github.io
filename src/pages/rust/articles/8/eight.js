import styles from "../../../../styles/styles.module.css"
import FormatCode from "../../../../main_components/code_formatter"
import { useEffect } from "react";

export const ShowEightRust = (props) => {
  const title = "Function parameter matching";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>          <hr></hr>
      <h2> Rust's powerful type system and ownership rules enable precise control over how parameters are passed and modified within functions. In this article, we'll explore the various patterns in function definitions and how to correctly match them when calling functions.</h2>
      <h2>Basic Parameter Passing in Rust</h2>
      <h2>When you pass a parameter to a function in Rust, two main actions take place:</h2>
      <h2>
        <ol>
          <li>Ownership Transfer: The function takes ownership of the parameter (passed by value in other languages)</li>
          <li>Borrows it as a reference (passed by reference in other languages).</li>
          <ol>
            When passing by reference, you can have two situations:
            <li>Mutable Reference: The function can mutate the referenced data.</li>
            <li>Immutable Reference: The function can only read the referenced data.</li>
          </ol>
        </ol>
      </h2>
      <h2>1. Ownership Transfer (Passed by Value)</h2>
      <h2>In this scenario, the function takes ownership of the variable passed as a value.</h2>
      <FormatCode
        code={code_1}
      />
      <h2>In this example, the parameter x is of type String, and it takes ownership of some_string.</h2>
      <h2>Rust function uses pattern matching</h2>
      <h2>x:String. here x is a pattern, when we call the function we pass a expression that matches it.</h2>
      <h2>if the function parameter is like this:</h2>
      <FormatCode
        code={code_2}
      />
      <h2>then when we call the function we have to pass the String just as that to match the pattern.</h2>
      <FormatCode
        code={code_3}
      />
      <h2>If you want the function to both take ownership and be able to mutate the parameter,we have to declare x as mutable in function declaration:</h2>
      <FormatCode
        code={code_4}
      />
      <h2>2. Passed by Reference</h2>
      <h2>When passing a parameter as a reference, you indicate that you want to borrow the data without taking ownership of it. This is achieved through two reference types: immutable and mutable references.</h2>
      <h2>a. Immutable Reference</h2>
      <h2>A function that takes an immutable reference can read the data but cannot mutate it. Here's an example:</h2>
      <FormatCode
        code={code_5}
      />
      <h2>the pattern in parameter here was:[&String], when calling the function we match it.</h2>
      <h2>b. Mutable Reference</h2>
      <h2>If you want the function to be able to both modify and access the data, you can pass a mutable reference. Here's an example:</h2>
      <FormatCode
        code={code_6}
      />
      <h2>In this case, the function takes a mutable reference indicated by &mut String. When calling the function, you match the pattern by passing &mut name</h2>
      <h2>in function parameter we cannot do this:</h2>
      <FormatCode
        code={code_7}
      />
      <h2>cause mut is only used to define a variable as mutable, in function parameter if used it is used at right side: [(mut x:String)]</h2>
      <h2>we </h2>
      <h2>but the parameter can be like this: [(x: &mut String)] as this is valid pattern that can match expression, also used when passing variable as mutable reference</h2>
      <h2>Same goes when declaring variables</h2>
      <FormatCode
        code={code_8}
      />

    </>

  );
}

const code_1 = `fn mutilate_this(x: String) {
   println!("{}",x)
}

fn main() {
  let some_string = String::from("original ");
  mutilate_this(some_string);
  // some_string is no longer accessible here, as it was moved into the function
}
`;

const code_2 = `fn mutilate_this(x: &&String) {`;
const code_3 = `let x:String = String::from("something");
mutilate_this(&&x);`;

const code_4 = `fn mutilate_this(mut x: String) {
  x.push_str("string");
}

fn main() {
  let some_string = String::from("original ");
  mutilate_this(some_string);
  // some_string is still accessible here, but it's been mutated by the function
}
`;

const code_5 = `fn mutilate_this(x: &String) {
  println!("{}", x);
}

fn main() {
  let name = String::from("immutable");
  mutilate_this(&name);
  // name remains accessible, and the function can read it
}
`;

const code_6 = `fn mutilate_this(x: &mut String) {
  println!("{}", x);
}

fn main() {
  let mut name = String::from("mutable");
  mutilate_this(&mut name);
  // name remains accessible, and the function can read and modify it
}
`;

const code_7 = `fn mutilate_this(x: mut String){}`;

const code_8 = `let mut one = String::from("1");
let b = &mut one;  // Valid
let c = mut one;   // Invalid`;