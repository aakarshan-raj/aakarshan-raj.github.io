import IssueBanner from "../../../../../../main_components/issue_banner";
import styles from "../../../../../../styles/styles.module.css"
import FormatCode from "../../../../../../main_components/code_formatter"
import SubHeading from "../../../../../../main_components/sub_heading"

export const Strings = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Strings</h1>
          <hr></hr>
         
          <SubHeading
            text="Problem code: strings1.rs"
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
          <h2>We were returning &str from a functions which contract specifies that it will return a String, to create a String we use from() from String library function.</h2>
          <hr></hr>

          <SubHeading
            text="Problem code: strings2.rs"
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
          <h2>We were passing String for a function that takes &str</h2>
          <hr></hr>

          <SubHeading
            text="Problem code: strings3.rs"
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
          <h2>Using functions provided by rust all three tasks can be done with just 2 calls to the functions. .trim() returns a &str we use .to_string() to convert it to String,
format is used to create a string format and return it as a String, and replace is used to replace parts of string and return a new string.</h2>
          <hr></hr>


          <SubHeading
            text="Problem code: strings4.rs"
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
          <h2>only time we had got string_slice was when using &str or slicing.</h2>
          <hr></hr>


        </div>
      </div>
      <IssueBanner />
    </div>
  );
}


const code_1 = `fn main() {
  let answer = current_favorite_color();
  println!("My current favorite color is {}", answer);
}

fn current_favorite_color() -> String {
  "blue"
}`;
const code_2 = `
fn main() {
    let answer = current_favorite_color();
    println!("My current favorite color is {}", answer);
}

fn current_favorite_color() -> String {
    String::from("blue")
}`;
const code_3 = `fn main() {
  let word = String::from("green"); // Try not changing this line :)
  if is_a_color_word(word) {
      println!("That is a color word I know!");
  } else {
      println!("That is not a color word I know.");
  }
}

fn is_a_color_word(attempt: &str) -> bool {
  attempt == "green" || attempt == "blue" || attempt == "red"
}`;
const code_4 = `fn main() {
  let word = String::from("green"); // Try not changing this line :)
  if is_a_color_word(&word) {
      println!("That is a color word I know!");
  } else {
      println!("That is not a color word I know.");
  }
}

fn is_a_color_word(attempt: &str) -> bool {
  attempt == "green" || attempt == "blue" || attempt == "red"
}`;
const code_5 = `fn trim_me(input: &str) -> String {
  // TODO: Remove whitespace from both ends of a string!
  ???
}

fn compose_me(input: &str) -> String {
  // TODO: Add " world!" to the string! There's multiple ways to do this!
  ???
}

fn replace_me(input: &str) -> String {
  // TODO: Replace "cars" in the string with "balloons"!
  ???
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn trim_a_string() {
      assert_eq!(trim_me("Hello!     "), "Hello!");
      assert_eq!(trim_me("  What's up!"), "What's up!");
      assert_eq!(trim_me("   Hola!  "), "Hola!");
  }

  #[test]
  fn compose_a_string() {
      assert_eq!(compose_me("Hello"), "Hello world!");
      assert_eq!(compose_me("Goodbye"), "Goodbye world!");
  }

  #[test]
  fn replace_a_string() {
      assert_eq!(replace_me("I think cars are cool"), "I think balloons are cool");
      assert_eq!(replace_me("I love to look at cars"), "I love to look at balloons");
  }
}`;
const code_6 = `fn trim_me(input: &str) -> String {
  input.trim().to_string()
}

fn compose_me(input: &str) -> String {
  format!("{} world!",input)
}

fn replace_me(input: &str) -> String {
  input.replace("cars","balloons")
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn trim_a_string() {
      assert_eq!(trim_me("Hello!     "), "Hello!");
      assert_eq!(trim_me("  What's up!"), "What's up!");
      assert_eq!(trim_me("   Hola!  "), "Hola!");
  }

  #[test]
  fn compose_a_string() {
      assert_eq!(compose_me("Hello"), "Hello world!");
      assert_eq!(compose_me("Goodbye"), "Goodbye world!");
  }

  #[test]
  fn replace_a_string() {
      assert_eq!(replace_me("I think cars are cool"), "I think balloons are cool");
      assert_eq!(replace_me("I love to look at cars"), "I love to look at balloons");
  }
}`;
const code_7 = `fn string_slice(arg: &str) {
  println!("{}", arg);
}
fn string(arg: String) {
  println!("{}", arg);
}

fn main() {
  ???("blue");
  ???("red".to_string());
  ???(String::from("hi"));
  ???("rust is fun!".to_owned());
  ???("nice weather".into());
  ???(format!("Interpolation {}", "Station"));
  ???(&String::from("abc")[0..1]);
  ???("  hello there ".trim());
  ???("Happy Monday!".to_string().replace("Mon", "Tues"));
  ???("mY sHiFt KeY iS sTiCkY".to_lowercase());
}`;
const code_8 = `fn string_slice(arg: &str) {
  println!("{}", arg);
}
fn string(arg: String) {
  println!("{}", arg);
}

fn main() {
  string_slice("blue");
  string("red".to_string());
  string(String::from("hi"));
  string("rust is fun!".to_owned());
  string("nice weather".into());
  string(format!("Interpolation {}", "Station"));
  string_slice(&String::from("abc")[0..1]);
  string_slice("  hello there ".trim());
  string("Happy Monday!".to_string().replace("Mon", "Tues"));
  string("mY sHiFt KeY iS sTiCkY".to_lowercase());
}`;
