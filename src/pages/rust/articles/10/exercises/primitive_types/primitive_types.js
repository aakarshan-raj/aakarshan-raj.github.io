import IssueBanner from "../../../../../../main_components/issue_banner";
import styles from "../../../../../../styles/styles.module.css"
import FormatCode from "../../../../../../main_components/code_formatter"
import SubHeading from "../../../../../../main_components/sub_heading";

export const PrimitiveTypes = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>PrimitiveTypes</h1>
          <hr></hr>

          <SubHeading
            text="Problem code: primitive_types.rs"
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
          <h2>Created a bool that didn't existed but we were using it.</h2>
          <hr></hr>

          <SubHeading
            text="Problem code: primitive_types.rs"
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
          <h2>we are using a variable `your_character` that hasn't need created, its a char so we assign it a value of a char.</h2>
          <hr></hr>

          <SubHeading
            text="Problem code: primitive_types3.rs"
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
          <h2>variable `a` is a array and in order for it to not panic we need to create 100 elements in it using the above syntax we create 100 elements in array that are of value 3.</h2>
          <hr></hr>

          <SubHeading
            text="Problem code: primitive_types4.rs"
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
          <h2>To take a slice of a array we use lower_bound..upper_bound , both lower and upper bound are included.</h2>
          <hr></hr>


          <SubHeading
            text="Problem code: primitive_types5.rs"
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
          <h2>cat variable is a tuple which can be distructured into two variables, using (name,age) expression we extract &str and a float value from cat tuple.</h2>
          <hr></hr>


          <SubHeading
            text="Problem code: primitive_types6.rs"
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
          <h2>In Rust to index a tuple we use dot(.) operator and then the index.</h2>
          <hr></hr>


        </div>
      </div>
      <IssueBanner />
    </div>
  );
}

const code_1 = `fn main() {

  let is_morning = true;
  if is_morning {
      println!("Good morning!");
  }

  let // Finish the rest of this line like the example! Or make it be false!
  if is_evening {
      println!("Good evening!");
  }
}`;
const code_2 = `fn main() {

  let is_morning = true;
  if is_morning {
      println!("Good morning!");
  }

  let is_evening = false;
  if is_evening {
      println!("Good evening!");
  }
}`;
const code_3 = `fn main() {

  // Note the _single_ quotes, these are different from the double quotes
  // you've been seeing around.
  let my_first_initial = 'C';
  if my_first_initial.is_alphabetic() {
      println!("Alphabetical!");
  } else if my_first_initial.is_numeric() {
      println!("Numerical!");
  } else {
      println!("Neither alphabetic nor numeric!");
  }

  let // Finish this line like the example! What's your favorite character?
  // Try a letter, try a number, try a special character, try a character
  // from a different language than your own, try an emoji!
  if your_character.is_alphabetic() {
      println!("Alphabetical!");
  } else if your_character.is_numeric() {
      println!("Numerical!");
  } else {
      println!("Neither alphabetic nor numeric!");
  }
}`;
const code_4 = `fn main() {

  // Note the _single_ quotes, these are different from the double quotes
  // you've been seeing around.
  let my_first_initial = 'C';
  if my_first_initial.is_alphabetic() {
      println!("Alphabetical!");
  } else if my_first_initial.is_numeric() {
      println!("Numerical!");
  } else {
      println!("Neither alphabetic nor numeric!");
  }

  let your_character = '3';
  if your_character.is_alphabetic() {
      println!("Alphabetical!");
  } else if your_character.is_numeric() {
      println!("Numerical!");
  } else {
      println!("Neither alphabetic nor numeric!");
  }
}`;
const code_5 = `fn main() {
  let a = ???

  if a.len() >= 100 {
      println!("Wow, that's a big array!");
  } else {
      println!("Meh, I eat arrays like that for breakfast.");
      panic!("Array not big enough, more elements needed")
  }
}`;
const code_6 = `fn main() {
  let a = [3;100];

  if a.len() >= 100 {
      println!("Wow, that's a big array!");
  } else {
      println!("Meh, I eat arrays like that for breakfast.");
      panic!("Array not big enough, more elements needed")
  }
}`;
const code_7 = `#[test]
fn slice_out_of_array() {
    let a = [1, 2, 3, 4, 5];

    let nice_slice = ???

    assert_eq!([2, 3, 4], nice_slice)
}`;
const code_8 = `
#[test]
fn slice_out_of_array() {
    let a = [1, 2, 3, 4, 5];

    let nice_slice = &a[1..4];

    assert_eq!([2, 3, 4], nice_slice)
}`;
const code_9 = `fn main() {
  let cat = ("Furry McFurson", 3.5);
  let /* your pattern here */ = cat;

  println!("{} is {} years old.", name, age);
}`;
const code_10 = `fn main() {
  let cat = ("Furry McFurson", 3.5);
  let (name,age) = cat;

  println!("{} is {} years old.", name, age);
}`;

const code_11 = `#[test]
fn indexing_tuple() {
    let numbers = (1, 2, 3);
    // Replace below ??? with the tuple indexing syntax.
    let second = ???;

    assert_eq!(2, second,
        "This is not the 2nd number in the tuple!")
}`;
const code_12 = `#[test]
fn indexing_tuple() {
    let numbers = (1, 2, 3);
    // Replace below ??? with the tuple indexing syntax.
    let second = numbers.1;

    assert_eq!(2, second,
        "This is not the 2nd number in the tuple!")
}`;