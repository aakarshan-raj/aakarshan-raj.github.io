import IssueBanner from "../../../../../../main_components/issue_banner";
import styles from "../../../../../../styles/styles.module.css"
import FormatCode from "../../../../../../main_components/code_formatter"
import SubHeading from "../../../../../../main_components/sub_heading"

export const Enums = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Enums</h1>
          <hr></hr>

          <SubHeading
            text="Problem code: enums1.rs"
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
          <h2>Using Rust syntax to define a Enum we defined the variants on the Enum.</h2>
          <hr></hr>



          <SubHeading
            text="Problem code: enums2.rs"
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
          <h2>This time almost all variant that we had to define had associated data, we created them accoriding to rust syntax.</h2>
          <hr></hr>




          <SubHeading
            text="Problem code: enums3.rs"
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
          <h2>Created all variants needed to pass the tests, used match expression to match the Enum variant that was passed, then extracted the associated value and passed it to respected functions.</h2>
          <hr></hr>

        </div>
      </div>
      <IssueBanner />
    </div>
  );
}


const code_1 = `#[derive(Debug)]
enum Message {
    // TODO: define a few types of messages as used below
}

fn main() {
    println!("{:?}", Message::Quit);
    println!("{:?}", Message::Echo);
    println!("{:?}", Message::Move);
    println!("{:?}", Message::ChangeColor);
}`;
const code_2 = `#[derive(Debug)]
enum Message {
   Quit,
   Echo,
   Move,
   ChangeColor
}

fn main() {
    println!("{:?}", Message::Quit);
    println!("{:?}", Message::Echo);
    println!("{:?}", Message::Move);
    println!("{:?}", Message::ChangeColor);
}`;
const code_3 = `#[derive(Debug)]
enum Message {
    // TODO: define the different variants used below
}

impl Message {
    fn call(&self) {
        println!("{:?}", self);
    }
}

fn main() {
    let messages = [
        Message::Move { x: 10, y: 30 },
        Message::Echo(String::from("hello world")),
        Message::ChangeColor(200, 255, 255),
        Message::Quit,
    ];

    for message in &messages {
        message.call();
    }
}`;
const code_4 = `#[derive(Debug)]
enum Message {
    Move{x:u32,y:u32},
    Echo(String),
    ChangeColor(u32,u32,u32),
    Quit
}

impl Message {
    fn call(&self) {
        println!("{:?}", self);
    }
}

fn main() {
    let messages = [
        Message::Move { x: 10, y: 30 },
        Message::Echo(String::from("hello world")),
        Message::ChangeColor(200, 255, 255),
        Message::Quit,
    ];

    for message in &messages {
        message.call();
    }
}`;
const code_5 = `enum Message {
  // TODO: implement the message variant types based on their usage below
}

struct Point {
  x: u8,
  y: u8,
}

struct State {
  color: (u8, u8, u8),
  position: Point,
  quit: bool,
  message: String,
}

impl State {
  fn change_color(&mut self, color: (u8, u8, u8)) {
      self.color = color;
  }

  fn quit(&mut self) {
      self.quit = true;
  }

  fn echo(&mut self, s: String) {
      self.message = s
  }

  fn move_position(&mut self, p: Point) {
      self.position = p;
  }

  fn process(&mut self, message: Message) {
      // TODO: create a match expression to process the different message variants
      // Remember: When passing a tuple as a function argument, you'll need extra parentheses:
      // fn function((t, u, p, l, e))
  }
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn test_match_message_call() {
      let mut state = State {
          quit: false,
          position: Point { x: 0, y: 0 },
          color: (0, 0, 0),
          message: "hello world".to_string(),
      };
      state.process(Message::ChangeColor(255, 0, 255));
      state.process(Message::Echo(String::from("Hello world!")));
      state.process(Message::Move(Point { x: 10, y: 15 }));
      state.process(Message::Quit);

      assert_eq!(state.color, (255, 0, 255));
      assert_eq!(state.position.x, 10);
      assert_eq!(state.position.y, 15);
      assert_eq!(state.quit, true);
      assert_eq!(state.message, "Hello world!");
  }
}`;
const code_6 = `enum Message {
  ChangeColor(u8, u8, u8),
  Echo(String),
  Move(Point),
  Quit,
}

struct Point {
  x: u8,
  y: u8,
}

struct State {
  color: (u8, u8, u8),
  position: Point,
  quit: bool,
  message: String,
}

impl State {
  fn change_color(&mut self, color: (u8, u8, u8)) {
      self.color = color;
  }

  fn quit(&mut self) {
      self.quit = true;
  }

  fn echo(&mut self, s: String) {
      self.message = s
  }

  fn move_position(&mut self, p: Point) {
      self.position = p;
  }

  fn process(&mut self, message: Message) {
      match message {
          Message::Quit => self.quit(),
          Message::ChangeColor(x,y,z) => self.change_color((x,y,z)),
          Message::Echo(x) => self.echo(x),
          Message::Move(x) => self.move_position(x),
      }
  }
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn test_match_message_call() {
      let mut state = State {
          quit: false,
          position: Point { x: 0, y: 0 },
          color: (0, 0, 0),
          message: "hello world".to_string(),
      };
      state.process(Message::ChangeColor(255, 0, 255));
      state.process(Message::Echo(String::from("Hello world!")));
      state.process(Message::Move(Point { x: 10, y: 15 }));
      state.process(Message::Quit);

      assert_eq!(state.color, (255, 0, 255));
      assert_eq!(state.position.x, 10);
      assert_eq!(state.position.y, 15);
      assert_eq!(state.quit, true);
      assert_eq!(state.message, "Hello world!");
  }
}`;
