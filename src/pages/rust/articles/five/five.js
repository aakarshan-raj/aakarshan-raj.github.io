import styles from "./styles.module.css"


export const ShowFiveRust = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Clone and Copy Traits</h1>
          <hr></hr>
          <div className={styles.content}>

            <h2>In Rust, the ownership system ensures that memory safety is maintained by tracking the ownership of data and ensuring that it's properly managed to prevent issues like data races, null pointer dereferences, and memory leaks. Each piece of data has a single owner, and when the owner goes out of scope, the data is automatically cleaned up. This system helps eliminate many common programming errors and makes Rust programs highly reliable and secure.</h2>
            <h2>but when its comes to certain types(numbers,character,boolean) these types have predefined sizes and are stored on stack, these types implement Copy Trait, these types are also called Copy types. So whenever we assign a variable a piece of data that is already stored on stack, it will make a copy implicitly.
            </h2>
            <h2>Examples</h2>
            <div className={styles.code_background}>
              <h2>{code_1}</h2>
            </div>
            <h2>in this example the value of x is copied(shallow) to y, no ownership transfer happens here.</h2>
            <h2>Another example</h2>

            <div className={styles.code_background}>
              <h2>{code_2}</h2>
            </div>
            <h2>here we pass x by value and in the function a copy of it is made.</h2>
            <h2>To find what type implement Copy trait we can:</h2>
            <div className={styles.code_background}>
              <h2>{code_3}</h2>
            </div>
            <h2>is_copy only takes types that implement Copy trait.
              or we can look at rust documentation for types to find out if the type implement copy trait or not, generally most of primitive type implement this trait.
            </h2>
            <h2>Implementing Copy trait on Custom data type.
              we can implement Copy trait on Struct, the entities inside the struct needs to implement Copy trait.
              Example:</h2>

            <div className={styles.code_background}>
              <h2>{code_4}</h2>
            </div>

            <h2>This code will produce error, till let y = x, everything was fine, the ownership was transferred but when we access both the Struct instance we will get error as the ownership is transferred, to make copy of Struct instance everything we assign to other struct we will implement Copy Trait:</h2>

            <div className={styles.code_background}>
              <h2>{code_5}</h2>
            </div>
            <h2>Notice we also implemented Clone trait, this is because Clone is supertrait of Copy and we want to enforce all types to also implement clone in case we deal with generic functions where types are not known beforehand, and we also implement Debug trait to print out struct using {debug} </h2>
            <h1 style={{textAlign:"center"}}>Clone Trait</h1>
            <h2>Clone trait is generally applied for types that are store on heap and their size is not known at compile time.

              we cannot make copies of data implicitly like with copy, we need to call the clone function on the variable to make a (deep)copy.</h2>
            <h2>Example:</h2>

            <div className={styles.code_background}>
              <h2>{code_6}</h2>
            </div>
            <h2>when Heap allocated data types are passed on to the function, we dont make a copy. to make a copy we can call clone method</h2>
            <div className={styles.code_background}>
              <h2>{code_7}</h2>
            </div>
            <h2>Implementing Clone trait for a struct</h2>
            <div className={styles.code_background}>
              <h2>{code_8}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const code_1 = `fn main() {
  let x = 4;
  let y = x;
  println!("{} {}", x, y);
}`;
const code_2 = `fn main() {
  let x = 4;
  take_int(x);
  println!("{}",x);
 
}

fn take_int(num:i32){
 println!("{}",num);
}`;

const code_3 = `
fn is_copy<T:Copy>(){

}

fn main() {
   is_copy::<i32>();
   is_copy::<u32>();
   is_copy::<char>();
   is_copy::<f32>();
}
`;

const code_4 = `#[derive(Debug)]
struct Point{
   x:i32,
   y:i32
    
}

fn main() {

 let x = Point{x:4,y:5};
 let y = x;
 println!("{:?} {:?}",x,y);

}
`;
const code_5 = `#[derive(Debug,Clone,Copy)]
struct Point{
   x:i32,
   y:i32
    
}

fn main() {

 let x = Point{x:4,y:5};
 let y = x;
 println!("{:?} {:?}",x,y);

}`;

const code_6 = `fn main() {
  let x: String = "hello".to_string();
  let y = x.clone();
  println!("{} {}", x, y);
}`;
const code_7 = `
fn show(s:String){
    println!("{}",s);
}

fn main() {
    let x: String = "hello".to_string();
    show(x.clone());
    println!("{}", x);
}`;
const code_8 = `#[derive(Debug, Clone)]
struct Data {
    name: String,
    age: u32,
}

fn main() {
    let x = Data {
        name: String::from("somename"),
        age: 33,
    };
    let y = x.clone();
    println!("{:?} {:?}", x, y);
}`;

const debug = `{:?}`;