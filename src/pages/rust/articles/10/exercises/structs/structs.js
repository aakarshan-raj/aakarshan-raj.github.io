import IssueBanner from "../../../../../../main_components/issue_banner";
import styles from "../../../../../../styles/styles.module.css"
import FormatCode from "../../../../../../main_components/code_formatter"
import SubHeading from "../../../../../../main_components/sub_heading"

export const Structs = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Structs</h1>
          <hr></hr>


          <SubHeading
            text="Problem code: struct.rs"
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
          <h2>Defining variants in struct needed to pass the tests</h2>
          <hr></hr>

          <SubHeading
            text="Problem code: struct.rs"
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
          <h2>Created our own struct object with values that will pass the test</h2>
          <hr></hr>

          <SubHeading
            text="Problem code: struct.rs"
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
          <h2>Completed both function, `is_international` which will check struct variants sender_country and recipient_country to check is it international package using simple if and else
`get_fees` required to return the price of shipping which is the weight of package multiplied argument which is supplied when calling the function.
</h2>
          <hr></hr>






        </div>
      </div>
      <IssueBanner />
    </div>
  );
}


const code_1 = `struct ColorClassicStruct {
  // TODO: Something goes here
}

struct ColorTupleStruct(/* TODO: Something goes here */);

#[derive(Debug)]
struct UnitLikeStruct;

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn classic_c_structs() {
      // TODO: Instantiate a classic c struct!
      // let green =

      assert_eq!(green.red, 0);
      assert_eq!(green.green, 255);
      assert_eq!(green.blue, 0);
  }

  #[test]
  fn tuple_structs() {
      // TODO: Instantiate a tuple struct!
      // let green =

      assert_eq!(green.0, 0);
      assert_eq!(green.1, 255);
      assert_eq!(green.2, 0);
  }

  #[test]
  fn unit_structs() {
      // TODO: Instantiate a unit-like struct!
      // let unit_like_struct =
      let message = format!("{:?}s are fun!", unit_like_struct);

      assert_eq!(message, "UnitLikeStructs are fun!");
  }
}`;
const code_2 = `struct ColorClassicStruct {
  red: u32,
  green: u32,
  blue: u32,
}

struct ColorTupleStruct(u32,u32,u32);

#[derive(Debug)]
struct UnitLikeStruct;

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn classic_c_structs() {
      // TODO: Instantiate a classic c struct!
      let green = ColorClassicStruct {
          red: 0,
          green: 255,
          blue: 0,
      };

      assert_eq!(green.red, 0);
      assert_eq!(green.green, 255);
      assert_eq!(green.blue, 0);
  }

  #[test]
  fn tuple_structs() {
      // TODO: Instantiate a tuple struct!
      let green = ColorTupleStruct(0, 255, 0);

      assert_eq!(green.0, 0);
      assert_eq!(green.1, 255);
      assert_eq!(green.2, 0);
  }

  #[test]
  fn unit_structs() {
      // TODO: Instantiate a unit-like struct!
      let unit_like_struct = UnitLikeStruct{};
      let message = format!("{:?}s are fun!", unit_like_struct);

      assert_eq!(message, "UnitLikeStructs are fun!");
  }
}`;
const code_3 = `#[derive(Debug)]
struct Order {
    name: String,
    year: u32,
    made_by_phone: bool,
    made_by_mobile: bool,
    made_by_email: bool,
    item_number: u32,
    count: u32,
}

fn create_order_template() -> Order {
    Order {
        name: String::from("Bob"),
        year: 2019,
        made_by_phone: false,
        made_by_mobile: false,
        made_by_email: true,
        item_number: 123,
        count: 0,
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn your_order() {
        let order_template = create_order_template();
        // TODO: Create your own order using the update syntax and template above!
        // let your_order =
        assert_eq!(your_order.name, "Hacker in Rust");
        assert_eq!(your_order.year, order_template.year);
        assert_eq!(your_order.made_by_phone, order_template.made_by_phone);
        assert_eq!(your_order.made_by_mobile, order_template.made_by_mobile);
        assert_eq!(your_order.made_by_email, order_template.made_by_email);
        assert_eq!(your_order.item_number, order_template.item_number);
        assert_eq!(your_order.count, 1);
    }
}`;
const code_4 = `#[derive(Debug)]
struct Order {
    name: String,
    year: u32,
    made_by_phone: bool,
    made_by_mobile: bool,
    made_by_email: bool,
    item_number: u32,
    count: u32,
}

fn create_order_template() -> Order {
    Order {
        name: String::from("Bob"),
        year: 2019,
        made_by_phone: false,
        made_by_mobile: false,
        made_by_email: true,
        item_number: 123,
        count: 0,
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn your_order() {
        let order_template = create_order_template();
        // TODO: Create your own order using the update syntax and template above!
        let your_order =  Order {
            name: String::from("Hacker in Rust"),
            year: 2019,
            made_by_phone: false,
            made_by_mobile: false,
            made_by_email: true,
            item_number: 123,
            count: 1,
        };
        assert_eq!(your_order.name, "Hacker in Rust");
        assert_eq!(your_order.year, order_template.year);
        assert_eq!(your_order.made_by_phone, order_template.made_by_phone);
        assert_eq!(your_order.made_by_mobile, order_template.made_by_mobile);
        assert_eq!(your_order.made_by_email, order_template.made_by_email);
        assert_eq!(your_order.item_number, order_template.item_number);
        assert_eq!(your_order.count, 1);
    }
}`;
const code_5 = `
#[derive(Debug)]
struct Package {
    sender_country: String,
    recipient_country: String,
    weight_in_grams: u32,
}

impl Package {
    fn new(sender_country: String, recipient_country: String, weight_in_grams: u32) -> Package {
        if weight_in_grams < 10 {
            // This is not how you should handle errors in Rust,
            // but we will learn about error handling later.
            panic!("Can not ship a package with weight below 10 grams.")
        } else {
            Package {
                sender_country,
                recipient_country,
                weight_in_grams,
            }
        }
    }

    fn is_international(&self) -> ??? {
        // Something goes here...
    }

    fn get_fees(&self, cents_per_gram: u32) -> ??? {
        // Something goes here...
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    #[should_panic]
    fn fail_creating_weightless_package() {
        let sender_country = String::from("Spain");
        let recipient_country = String::from("Austria");

        Package::new(sender_country, recipient_country, 5);
    }

    #[test]
    fn create_international_package() {
        let sender_country = String::from("Spain");
        let recipient_country = String::from("Russia");

        let package = Package::new(sender_country, recipient_country, 1200);

        assert!(package.is_international());
    }

    #[test]
    fn create_local_package() {
        let sender_country = String::from("Canada");
        let recipient_country = sender_country.clone();

        let package = Package::new(sender_country, recipient_country, 1200);

        assert!(!package.is_international());
    }

    #[test]
    fn calculate_transport_fees() {
        let sender_country = String::from("Spain");
        let recipient_country = String::from("Spain");

        let cents_per_gram = 3;

        let package = Package::new(sender_country, recipient_country, 1500);

        assert_eq!(package.get_fees(cents_per_gram), 4500);
        assert_eq!(package.get_fees(cents_per_gram * 2), 9000);
    }
}`;
const code_6 = `#[derive(Debug)]
struct Package {
    sender_country: String,
    recipient_country: String,
    weight_in_grams: u32,
}

impl Package {
    fn new(sender_country: String, recipient_country: String, weight_in_grams: u32) -> Package {
        if weight_in_grams < 10 {
            // This is not how you should handle errors in Rust,
            // but we will learn about error handling later.
            panic!("Can not ship a package with weight below 10 grams.")
        } else {
            Package {
                sender_country,
                recipient_country,
                weight_in_grams,
            }
        }
    }

    fn is_international(&self) -> bool {
        if (self.sender_country == self.recipient_country ){
            return false;
        }
        return true;
    }

    fn get_fees(&self, cents_per_gram: u32) -> u32 {
        return &self.weight_in_grams*cents_per_gram;
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    #[should_panic]
    fn fail_creating_weightless_package() {
        let sender_country = String::from("Spain");
        let recipient_country = String::from("Austria");

        Package::new(sender_country, recipient_country, 5);
    }

    #[test]
    fn create_international_package() {
        let sender_country = String::from("Spain");
        let recipient_country = String::from("Russia");

        let package = Package::new(sender_country, recipient_country, 1200);

        assert!(package.is_international());
    }

    #[test]
    fn create_local_package() {
        let sender_country = String::from("Canada");
        let recipient_country = sender_country.clone();

        let package = Package::new(sender_country, recipient_country, 1200);

        assert!(!package.is_international());
    }

    #[test]
    fn calculate_transport_fees() {
        let sender_country = String::from("Spain");
        let recipient_country = String::from("Spain");

        let cents_per_gram = 3;

        let package = Package::new(sender_country, recipient_country, 1500);

        assert_eq!(package.get_fees(cents_per_gram), 4500);
        assert_eq!(package.get_fees(cents_per_gram * 2), 9000);
    }
}`;
