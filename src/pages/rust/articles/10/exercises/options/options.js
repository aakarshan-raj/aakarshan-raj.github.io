import IssueBanner from "../../../../../../main_components/issue_banner";
import styles from "../../../../../../styles/styles.module.css"
import FormatCode from "../../../../../../main_components/code_formatter"
import SubHeading from "../../../../../../main_components/sub_heading"

export const Options = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Options</h1>
          <hr></hr>

          <SubHeading text="Problem code: options1.rs" />
          <FormatCode code={code_1} />
          <SubHeading text="Solution code" />
          <FormatCode code={code_2} />
          <SubHeading text="Explanation" />
          <h2>Written logic to return Option variant Some with 5 value if the time_of_day is less than 22, if more than 24 return None, also to test values to option wrap the data in Some.</h2>
          <hr>
          </hr>

          <SubHeading text="Problem code: options2.rs" />
          <FormatCode code={code_3} />
          <SubHeading text="Solution code" />
          <FormatCode code={code_4} />
          <SubHeading text="Explanation" />
          <h2> used if let which is speically used Options, when we use if let we extract the value from the option and can use that value. also .pop returns a Option that's why we had to wrap cursor in Some.</h2>
          <hr>
          </hr>

          <SubHeading text="Problem code: options3.rs" />
          <FormatCode code={code_5} />
          <SubHeading text="Solution code" />
          <FormatCode code={code_6} />
          <SubHeading text="Explanation" />
          <h2>The match block took ownership of our Struct, using ref keyword solves it as.</h2>
          <h2>Why not use &, what is ref?
ref have no role in pattern matching, if we use & then it means their would be a reference in pattern matching, but we dont want that, we wanna pass a value, use it in match block without giving it the ownership.
ref would indicate we want a reference to the value that matched.
</h2>
          <hr>
          </hr>

        </div>
      </div>
      <IssueBanner />
    </div>
  );
}
const code_1 = `
fn maybe_icecream(time_of_day: u16) -> Option<u16> {
    // We use the 24-hour system here, so 10PM is a value of 22 and 12AM is a
    // value of 0 The Option output should gracefully handle cases where
    // time_of_day > 23.
    // TODO: Complete the function body - remember to return an Option!
    ???
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn check_icecream() {
        assert_eq!(maybe_icecream(9), Some(5));
        assert_eq!(maybe_icecream(10), Some(5));
        assert_eq!(maybe_icecream(23), Some(0));
        assert_eq!(maybe_icecream(22), Some(0));
        assert_eq!(maybe_icecream(25), None);
    }

    #[test]
    fn raw_value() {
        // TODO: Fix this test. How do you get at the value contained in the
        // Option?
        let icecreams = maybe_icecream(12);
        assert_eq!(icecreams, 5);
    }
}`;
const code_2 = `fn maybe_icecream(time_of_day: u16) -> Option<u16> {

  let mut ice_cream: Option<u16>;
  if time_of_day < 22 {
      ice_cream = Some(5);
  } else if (time_of_day < 25){
      ice_cream = Some(0);
  }
  else{
      ice_cream = None;
  }
  ice_cream
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn check_icecream() {
      assert_eq!(maybe_icecream(9), Some(5));
      assert_eq!(maybe_icecream(10), Some(5));
      assert_eq!(maybe_icecream(23), Some(0));
      assert_eq!(maybe_icecream(22), Some(0));
      assert_eq!(maybe_icecream(25), None);
  }

  #[test]
  fn raw_value() {
      let icecreams = maybe_icecream(12);
      assert_eq!(icecreams, Option::Some(5));
  }
}
`;
const code_3 = `#[cfg(test)]
mod tests {
    #[test]
    fn simple_option() {
        let target = "rustlings";
        let optional_target = Some(target);

        // TODO: Make this an if let statement whose value is "Some" type
        word = optional_target {
            assert_eq!(word, target);
        }
    }

    #[test]
    fn layered_option() {
        let range = 10;
        let mut optional_integers: Vec<Option<i8>> = vec![None];

        for i in 1..(range + 1) {
            optional_integers.push(Some(i));
        }

        let mut cursor = range;
        integer = optional_integers.pop() {
            assert_eq!(integer, cursor);
            cursor -= 1;
        }

        assert_eq!(cursor, 0);
    }
}
`;
const code_4 = `#[cfg(test)]
mod tests {
    #[test]
    fn simple_option() {
        let target = "rustlings";
        let optional_target = Some(target);

        // TODO: Make this an if let statement whose value is "Some" type
        if let Some(word) = optional_target {
            assert_eq!(word, target);
        }
    }

    #[test]
    fn layered_option() {
        let range = 10;
        let mut optional_integers: Vec<Option<i8>> = vec![None];

        for i in 1..(range + 1) {
            optional_integers.push(Some(i));
        }

        let mut cursor = range;

        while(cursor != 0){
        if let Some(integer) = optional_integers.pop() {
            assert_eq!(integer, Some(cursor));
            cursor -= 1;
        }
    }

        assert_eq!(cursor, 0);
    }
}`;
const code_5 = `struct Point {
  x: i32,
  y: i32,
}

fn main() {
  let y: Option<Point> = Some(Point { x: 100, y: 200 });

  match y {
      Some(p) => println!("Co-ordinates are {},{} ", p.x, p.y),
      _ => panic!("no match!"),
  }
  y; // Fix without deleting this line.
}
`;
const code_6 = `struct Point {
  x: i32,
  y: i32,
}

fn main() {
  let y: Option<Point> = Some(Point { x: 100, y: 200 });

  match y {
      Some(ref p) => println!("Co-ordinates are {},{} ", p.x, p.y),
      _ => panic!("no match!"),
  }
  y; // Fix without deleting this line.
}
`;