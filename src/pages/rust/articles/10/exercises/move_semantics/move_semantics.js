import IssueBanner from "../../../../../../main_components/issue_banner";
import styles from "../../../../../../styles/styles.module.css"
import FormatCode from "../../../../../../main_components/code_formatter"
import SubHeading from "../../../../../../main_components/sub_heading";

export const MoveSemantics = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>MoveSemantics</h1>
          <hr></hr>



          <SubHeading
            text="Problem code: move_semantics1.rs"
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
          <h2>When we pass `vec0` to fill_vec and then we use that to initialise `vec`, by making it `mut` and making it mutable, the error will stop.</h2>
          <hr></hr>



          <SubHeading
            text="Problem code: move_semantics2.rs"
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
          <h2>we are using `vec0` after transfering its ownership to `fill_vec` to resolve it we can create a clone of `vec0` by using `clone()` on the vector.</h2>
          <hr></hr>



          <SubHeading
            text="Problem code: move_semantics3.rs"
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
          <h2>In function `fill_vec` we take on paramter, we need to make it mutable if we are going to take ownership of it and mutate it.
            with new function signature, we move the value to a mutable variable when passed to the function.</h2>
          <hr></hr>



          <SubHeading
            text="Problem code: move_semantics4.rs"
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
            text="Explanation"
          />
          <h2>Created vector in the function instead of taking argument.</h2>
          <hr></hr>



          <SubHeading
            text="Problem code: move_semantics5.rs"
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
            text="Explanation"
          />
          <h2>According to Rust rules we cannot have two mutable reference to a variable, by reordering the steps our code compiles as after we increment `y` and create another mutable reference `z` , the other mutable reference `y` goes out of scope.</h2>
          <hr></hr>



          <SubHeading
            text="Problem code: move_semantics6.rs"
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
            text="Explanation"
          />
          <h2>The first problem arises when we pass data to get_char and it takes its owernship then again try to pass data to string_uppercase, we can use .clone() when passing data to get_char.</h2>
          <h2>second problem is </h2>
          <h2>string_uppercase receives a mutable reference(&mut String)[not ownerhship of data]then we use `to_uppercase()` on borrowed data
            which returns us a immutable reference(&data.to_uppercase()), then we try to reassign this temporary immutable reference to original `data` value(data = &data.to_uppercase()), which tries to modify the original data but then the data is dropped after we get out of the function. This violates rust borrowing rules.
            Rust does not allow rebinding of references. When you declare a mutable reference (&mut), you're allowed to mutate the data the reference points to, but you can't change the reference itself to point somewhere else.</h2>
          <h2>fn string_uppercase(mut data:&String)
            this means you cannot mutate the original value of data, it allows the binding of the reference itself to change (you could later reassign data to point to a different reference).</h2>
          <h2>if the function signature was like:
            fn string_uppercase(data: &String) we couldn't reassign data to point to somewhere else
          </h2>
          <hr></hr>

        </div>
      </div>
      <IssueBanner />
    </div>
  );
}


const code_1 = `#[test]
fn main() {
    let vec0 = vec![22, 44, 66];

    let vec1 = fill_vec(vec0);

    assert_eq!(vec1, vec![22, 44, 66, 88]);
}

fn fill_vec(vec: Vec<i32>) -> Vec<i32> {
    let vec = vec;

    vec.push(88);

    vec
}`;
const code_2 = `#[test]
fn main() {
    let vec0 = vec![22, 44, 66];

    let vec1 = fill_vec(vec0);

    assert_eq!(vec1, vec![22, 44, 66, 88]);
}

fn fill_vec(vec: Vec<i32>) -> Vec<i32> {
    let mut vec = vec;

    vec.push(88);

    vec
}`;
const code_3 = `#[test]
fn main() {
    let vec0 = vec![22, 44, 66];

    let mut vec1 = fill_vec(vec0);

    assert_eq!(vec0, vec![22, 44, 66]);
    assert_eq!(vec1, vec![22, 44, 66, 88]);
}

fn fill_vec(vec: Vec<i32>) -> Vec<i32> {
    let mut vec = vec;

    vec.push(88);

    vec
}`;
const code_4 = `#[test]
fn main() {
    let vec0 = vec![22, 44, 66];

    let mut vec1 = fill_vec(vec0.clone());

    assert_eq!(vec0, vec![22, 44, 66]);
    assert_eq!(vec1, vec![22, 44, 66, 88]);
}

fn fill_vec(vec: Vec<i32>) -> Vec<i32> {
    let mut vec = vec;

    vec.push(88);

    vec
}`;
const code_5 = `#[test]
fn main() {
    let vec0 = vec![22, 44, 66];

    let mut vec1 = fill_vec(vec0);

    assert_eq!(vec1, vec![22, 44, 66, 88]);
}

fn fill_vec(vec: Vec<i32>) -> Vec<i32> {
    vec.push(88);

    vec
}`;
const code_6 = `#[test]
fn main() {
    let vec0 = vec![22, 44, 66];

    let mut vec1 = fill_vec(vec0);

    assert_eq!(vec1, vec![22, 44, 66, 88]);
}

fn fill_vec(mut vec:Vec<i32>) -> Vec<i32> {
    vec.push(88);

    vec
}`;
const code_7 = `#[test]
fn main() {
    let vec0 = vec![22, 44, 66];

    let mut vec1 = fill_vec(vec0);

    assert_eq!(vec1, vec![22, 44, 66, 88]);
}

fn fill_vec() -> Vec<i32> {

    let mut vec = vec;

    vec.push(88);

    vec
}`;
const code_8 = `
fn main() {
    let vec0 = vec![22, 44, 66];

    let mut vec1 = fill_vec();

    assert_eq!(vec1, vec![22, 44, 66, 88]);
}

fn fill_vec() -> Vec<i32> {
    // Instead, let's create and fill the Vec in here - how do you do that?
    let vec = vec![22,44,66];
    let mut vec = vec;

    vec.push(88);

    vec
}`;

const code_9 = `#[test]
fn main() {
    let mut x = 100;
    let y = &mut x;
    let z = &mut x;
    *y += 100;
    *z += 1000;
    assert_eq!(x, 1200);
}`;
const code_10 = `#[test]
fn main() {
    let mut x = 100;
    let y = &mut x;
    *y += 100;
    let z = &mut x;
    *z += 1000;
    assert_eq!(x, 1200);
}`;
const code_11 = `fn main() {
  let data = "Rust is great!".to_string();

  get_char(data);

  string_uppercase(&data);
}

// Should not take ownership
fn get_char(data: String) -> char {
  data.chars().last().unwrap()
}

// Should take ownership
fn string_uppercase(mut data: &String) {
  data = &data.to_uppercase();

  println!("{}", data);
}`;
const code_12 = `fn main() {
  let data = "Rust is great!".to_string();

  get_char(data.clone());

  string_uppercase(&data);
  println!("{}",data);
}

// Should not take ownership
fn get_char(data: String) -> char {
  data.chars().last().unwrap()
}

// Should take ownership
fn string_uppercase(mut data: &String) {
  let data = &data.to_uppercase();

  println!("{}", data);
}`;