import IssueBanner from "../../../../../../main_components/issue_banner";
import styles from "../../../../../../styles/styles.module.css"
import FormatCode from "../../../../../../main_components/code_formatter"
import SubHeading from "../../../../../../main_components/sub_heading"

export const Modules = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Modules</h1>
          <hr></hr>

          <SubHeading
            text="Problem code: modules1.rs"
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
          <h2>Everything in a module is private by default, using visibility modifier we can access the function we want.</h2>
          <hr></hr>

          <SubHeading
            text="Problem code: modules2.rs"
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
          <h2>when we create alias they are private too by default using `pub` visibility modifier we can make them public
</h2>
          <hr></hr>

          <SubHeading
            text="Problem code: modules3.rs"
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
          <h2>This is standard way to import sub components from a standard library. time is a module that exists in standard library.

</h2>
          <hr></hr>



        </div>
      </div>
      <IssueBanner />
    </div>
  );
}
const code_1 = `mod sausage_factory {
  // Don't let anybody outside of this module see this!
  fn get_secret_recipe() -> String {
      String::from("Ginger")
  }

  fn make_sausage() {
      get_secret_recipe();
      println!("sausage!");
  }
}

fn main() {
  sausage_factory::make_sausage();
}`;
const code_2 = `mod sausage_factory {
  // Don't let anybody outside of this module see this!
  fn get_secret_recipe() -> String {
      String::from("Ginger")
  }

  pub fn make_sausage() {
      get_secret_recipe();
      println!("sausage!");
  }
}

fn main() {
  sausage_factory::make_sausage();
}
`;
const code_3 = `
mod delicious_snacks {

    use self::fruits::PEAR as ???
    use self::veggies::CUCUMBER as ???

    mod fruits {
        pub const PEAR: &'static str = "Pear";
        pub const APPLE: &'static str = "Apple";
    }

    mod veggies {
        pub const CUCUMBER: &'static str = "Cucumber";
        pub const CARROT: &'static str = "Carrot";
    }
}

fn main() {
    println!(
        "favorite snacks: {} and {}",
        delicious_snacks::fruit,
        delicious_snacks::veggie
    );
}`;
const code_4 = `
mod delicious_snacks {

    pub use self::fruits::PEAR as fruit;

    pub use self::veggies::CUCUMBER as veggie;

    mod fruits {
        pub const PEAR: &'static str = "Pear";
        pub const APPLE: &'static str = "Apple";
    }

    mod veggies {
        pub const CUCUMBER: &'static str = "Cucumber";
        pub const CARROT: &'static str = "Carrot";
    }
}

fn main() {
    println!(
        "favorite snacks: {} and {}",
        delicious_snacks::fruit,
        delicious_snacks::veggie
    );
}`;
const code_5 = `use ???

fn main() {
    match SystemTime::now().duration_since(UNIX_EPOCH) {
        Ok(n) => println!("1970-01-01 00:00:00 UTC was {} seconds ago!", n.as_secs()),
        Err(_) => panic!("SystemTime before UNIX EPOCH!"),
    }
}`;
const code_6 = `
use std::time::{UNIX_EPOCH,SystemTime};

fn main() {
    match SystemTime::now().duration_since(UNIX_EPOCH) {
        Ok(n) => println!("1970-01-01 00:00:00 UTC was {} seconds ago!", n.as_secs()),
        Err(_) => panic!("SystemTime before UNIX EPOCH!"),
    }
}`;
