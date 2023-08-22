import styles from "./styles.module.css"


export const ShowFiveRust = ()=>{
    return (
      <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
        <h1 className={styles.title}>Clone and Copy Traits</h1>
          <hr></hr>
            <div className={styles.content}>
           
<h2>In Rust, the ownership system ensures that memory safety is maintained by tracking the ownership of data and ensuring that it's properly managed to prevent issues like data races, null pointer dereferences, and memory leaks. Each piece of data has a single owner, and when the owner goes out of scope, the data is automatically cleaned up. This system helps eliminate many common programming errors and makes Rust programs highly reliable and secure.</h2>
       <h2>but when its comes to certain types(numbers,character,boolean) these types have predefined sizes and are stored on stack, these types implement Copy Trait. So whenever we assign a variable a piece of data that is already stored on stack, it will make a copy implicitly.
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
<h1>Clone Trait</h1>
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