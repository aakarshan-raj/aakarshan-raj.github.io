import IssueBanner from "../../../../main_components/issue_banner";
import styles from "../../../../styles/styles.module.css"


export const ShowSixRust = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Iced: A Modern Rust GUI Framework for Cross-Platform Applications</h1>
          <hr></hr>
          <div className={styles.content}>
            <h2>Iced is a modern Rust GUI (Graphical User Interface) framework that simplifies the process of building cross-platform graphical applications.</h2>
            <h2>in Iced the interface is split into 4 parts</h2>
            <h2>
              <h3>1. State(model):state of application</h3>
              <h3>2. Message: User interaction Or event</h3>
              <h3>3. View Logic(View): Displaying State to User</h3>
              <h3>4. Update Logic(update): Reaction to Message and change the state</h3>
            </h2>
            <h2>Every Program has these 4 parts.</h2>
            <h2>There are two ways we can go forward to make GUI in ICED.
              Every Iced program as a State defined using a struct. This struct can either implement Sandbox trait or Application trait. We will go forward with Sandbox trait first then use Application trait.
            </h2>
            <h2>every struct implementing Sandbox trait must implement the following methods</h2>
            <div className={styles.code_background_pink}>
              <h2>{code_1}</h2>
            </div>
            <h2>We will make a simple GUI that shows "Hello World!"</h2>
            <div className={styles.code_background}>
              <h2>{code_2}</h2>
            </div>
            <h2>The new function returns the struct type.</h2>
            <h2>The title returns the title of the window.
              We haven't done anything in upadate function since there is no user interactions yet.</h2>
            <h2>The view function will return a simple Text widget then we call .into function to convert it into Element widget.</h2>
            <h2>Now to run this application we need to call run function on the Struct(model) and provide it with some Settings, at this moment we are using default settings from iced::Settings::default() but later we will provide our own settings.
              we call unwrap() on it as it returns a Result.</h2>

            <h2>Now we will implement it using Application trait.</h2>
            <h2>for application trait we need to implement these functions</h2>

            <div className={styles.code_background_pink}>
              <h2>{code_3}</h2>
            </div>
            <h2>and also we need to set these type's</h2>
            <div className={styles.code_background_red}>
              <h2>{code_4}</h2>
            </div>
            <h2>Executors helpers to execute blocking operations inside async context, we are using the default executer provided by iced.</h2>

            <h2>we have Theme and Flags now, we will use them later, at this moment Theme is set to Theme from iced and flag to a empty Tuple.</h2>
            <h2>Here is previous code that was written using Sandbox written Using Application trait.</h2>
            <div className={styles.code_background}>
              <h2>{code_5}</h2>
            </div>
            <h2>the return types have changed for new and update, new returns a tuple now of Self and Command(actions to be performed) at this momment we return Command::none() which means no command.</h2>
            <h2>update function now returns Command, right now it just returns Command::none() like new.</h2>
            <h2>if you run this you would get a screen with hello world on it.</h2>
            <h2>Now we can move to make a somewhat useful Application.</h2>
            <div className={styles.code_background}>
              <h2>{code_6}</h2>
            </div>
            <h2>Lets break down the application.</h2>

            <h2>It has three states that are defined in the struct, first_input,second_input,answer.
              the enum Message defines all the Events that can occur.</h2>
            <h2>First(String),Second(String),Third(String) are callbacks for the textinputs and Addition, Substraction, Division, Multiplication, will be used for when certain buttons are clicked.</h2>
            <h2>In the new function we are returning the starting state of the application, 0.0 value in all the fields.</h2>
            <h2>View function makes use of many widgets such as TextInput,Button,row,column and Container.</h2>
            <h2>To bind TextInput to a Message `.on_input` is used which takes a Message variant</h2>
            <h2>To Bind the Button to a Messag `.on_press` is used</h2>
            <h2>row! and column! are macro's (from use iced::widget::)that are used to put all the items in a row or column.
              After that we put everything in a container and return it back.</h2>
            <h2>Certain styling functions can be called on these Widgets like we have such as padding(), spacing(),horizontal_alignment().</h2>

            <h2>In the update function we use match statement, to perform actions when certain events are triggered, since our application is a simple calculator, we do calculation when any button is pressed by accessing the model and performing any of the opertions and then changing the state value of it.</h2>
            <h2>we also handle the event when the text input changes, with help of enum variant that has a string, we assign the state variable to the value being put in the textinput and we also handle any error with help of unwrap_or_else, we basically just return 0, if anyting other than a positive number is inputted.</h2>
            <h2>And at last we provide custom settings in the run method, with a custom window size, and letting the other value remain same by using `..Default::default()`</h2>
            <h2 className={styles.center_it}><a href="https://github.com/aakarshan-raj/blog-examples/tree/master/calculator">Source code</a></h2>

          </div>
        </div>
      </div>
      <IssueBanner />
    </div>
  );
}


const code_1 = `fn new() -> Self { todo!() }
fn title(&self) -> String { todo!() }
fn update(&mut self, _: <Self as Sandbox>::Message) { todo!() }
fn view(&self) -> Element<Message> { todo!() }`;
const code_2 = `

use iced::widget::Text;
use iced::{Sandbox, Element};


use iced::Settings;

struct Hello;



impl Sandbox for Hello  {
type Message = ();
fn new() -> Self { Self }
fn title(&self) -> String { String::from("ICED window") }
fn update(&mut self, _:()) {  }
fn view(&self) -> Element<()> { Text::new("Hello World!").into() }

}

fn main() {
   Hello::run(Settings::default()).unwrap()
}
`;
const code_3 = `fn new(_flag:Self::Flags) -> (Self,Command<Self::Message>) { todo!() }
fn title(&self) -> String { todo!() }
fn update(&mut self,message:Self::Message) -> Command<Self::Message>{ todo!() }
fn view(&self) -> Element<Self::Message>{ todo!() }
 `;
const code_4 = `type Executor = executor::Default;
type Message = ();
type Theme = Theme;
type Flags = ();`;
const code_5 = `
use iced::widget::Text;
use iced::{Element, Application, Command, executor,Theme};


use iced::Settings;

struct Hello;


impl Application for Hello  {
type Executor = executor::Default;
type Message = ();
type Theme = Theme;
type Flags = ();

fn new(_flag:Self::Flags) -> (Self,Command<Self::Message>) {
      ( 
        Self,
        Command::none()
      )
     }
fn title(&self) -> String { String::from("window") }
fn update(&mut self,_message:Self::Message) -> Command<Self::Message>{ Command::none()}
fn view(&self) -> Element<Self::Message>{ Text::new("Hello World!").into() }
 
 
}

fn main() {
   Hello::run(Settings::default()).unwrap()
}`;

const code_6 = `use iced::alignment::Horizontal;
use iced::widget::{column, row, TextInput};
use iced::widget::{text_input, Button, Container, Text};
use iced::{executor, Application, Command, Element, Theme};

use iced::Settings;

struct Calculator {
    first_input: f64,
    second_input: f64,
    answer: f64,
}

#[derive(Debug, Clone)]
enum Message {
    First(String),
    Second(String),
    Third(String),
    Addition,
    Substraction,
    Division,
    Multiplication,
}

impl Application for Calculator {
    type Executor = executor::Default;
    type Message = Message;
    type Theme = Theme;
    type Flags = ();

    fn new(_flag: Self::Flags) -> (Self, Command<Self::Message>) {
        (
            Self {
                first_input: 0.0,
                second_input: 0.0,
                answer: 0.0,
            },
            Command::none(),
        )
    }
    fn title(&self) -> String {
        String::from("window")
    }
    fn update(&mut self, message: Self::Message) -> Command<Self::Message> {
        match message {
            Message::Addition => self.answer = self.first_input + self.second_input,
            Message::Substraction => self.answer = self.first_input - self.second_input,
            Message::Multiplication => self.answer = self.first_input * self.second_input,
            Message::Division => self.answer = self.first_input / self.second_input,
            Message::First(value) => self.first_input = value.parse().unwrap_or_else(|_err|{ return 0.0; }),
            Message::Second(value) => self.second_input = value.parse().unwrap_or_else(|_err|{ return 0.0; }),
            Message::Third(value) => self.answer = value.parse().unwrap(),
        }

        Command::none()
    }
    fn view(&self) -> Element<Self::Message> {
        let input_one: Element<Message> = TextInput::new("", &self.first_input.to_string())
            .on_input(Message::First)
            .padding(10)
            .into();
        let input_two: Element<Message> = text_input("", &self.second_input.to_string())
            .padding(10)
            .on_input(Message::Second)
            .into();
        let answer_label: Element<Message> = Text::new("Answers")
            .width(400)
            .horizontal_alignment(Horizontal::Center)
            .into();
        let answer: Element<Message> = text_input("Answer", &self.answer.to_string())
            .on_input(Message::Third)
            .padding(10)
            .into();
        let add: Element<Message> = Button::new("ADD").on_press(Message::Addition).into();
        let sub: Element<Message> = Button::new("SUB").on_press(Message::Substraction).into();
        let mul: Element<Message> = Button::new("MUL").on_press(Message::Multiplication).into();
        let div: Element<Message> = Button::new("DIV").on_press(Message::Division).into();
        let btn_row: Element<Message> = row!(add, sub, mul, div).spacing(75).into();
        let answer_col: Element<Message> = column!(answer_label, answer).into();
        let main_row = column!(input_one, btn_row, input_two, answer_col)
            .padding(10)
            .spacing(40);

        Container::new(main_row).into()
    }
}

fn main() {
    let custom_settings: Settings<()> = Settings {
        window: iced::window::Settings {
            size: (400, 400),
            ..Default::default()
        },
        ..Default::default()
    };
    Calculator::run(custom_settings).unwrap()
}
`;
