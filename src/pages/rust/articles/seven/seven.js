import styles from "../../../../styles/styles.module.css"


export const ShowSevenRust = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Threads in Rust</h1>
          <hr></hr>
          <div className={styles.content}>
            <h2>A rust program starts with a single thread(main), using standard
              implementation provided to use we can create multiple threads in our
              rust program, more threads means we can perform tasks faster for example
              a http server, using multiple threads can increase the perfromamce of the
              server, but we need to use it carefully as we only have limited number of
              threads and with rust we need to be extra careful(only while writing rust,
              when it runs we can relax).</h2>
            <h2>
              Let's look at the defination of a thread in rust doc
              "An executing Rust program consists of a collection of native OS
              threads, each with their own stack and local state. Threads can be named,
              and provide some built-in support for low-level synchronization."

            </h2>
            <h2>
              threads can be either native or green, native threads have
              less overhead and are handled by OS, but are resource intensive
              while green threads are managed at applocation level, and require
              a lot of bookeeping, from rust 1.0 we only gave native thread.
            </h2>
            <h2>
              we will talk about synchronization support for threads later on!
            </h2>
            <h2>Creating a thread(spawnniing)</h2>
            <h2>using spawn function from thread module we can spin up a new thread.</h2>
            <div className={styles.code_background}> <h2>{code_1}</h2> </div>
            <h2>here is the defination of spawn function from thread module. it takes a  Closure that is of type FnOnce, and that closure will return a genric(T), which will be infered by the compiler so we dont need to specify it. the returned type would implement Send trait(can be safely transferred between threads and must have 'static lifetime).</h2>
            <h2>The closure wont take any argument</h2>
            <h2>this function will return a JoinHandle, which is a struct , returned by the spawn function. on this returned struct we can call join() function which waits for the thread to finish.
            </h2>
            <h2>now lets make a simple thread:</h2>
            <div className={styles.code_background}> <h2>{code_2}</h2> </div>
            <h2>
              Its time to talk about closures, we need to understand the type of closure the spawn() takes.</h2>
            <h2>Closure are anonymous functions that can be saved in a variable or passed to a function, its different than function cause it can capture values from the scope its difined in.</h2>
            <h2>closures are not rigidly defined.</h2>
            <h2>Example:</h2>
            <div className={styles.code_background}> <h2>{code_3}</h2> </div>
            <h2>
              here we define a number then a closure function that captures that number , then we use that closure to assign value to z.
            </h2>
            <h2>another example:</h2>
            <div className={styles.code_background}> <h2>{code_4}</h2> </div>
            <h2>here we define a string then using a closure we mutate it.
              the string is mutate referenced in the closure, to move the string into the closure we can use move keyword:</h2>
            <div className={styles.code_background}> <h2>{code_5}</h2> </div>
            <h2>Now while writing these programs rust-analyser gives type annotation to the closure variable.</h2>
            <h2>for first example its, impl Fn()</h2>
            <h2>for second examples its, impl FnMut()</h2>
            <h2>What's the difference?</h2>
            <h2>Fn() closure that implement Fn doesn't move captured value and dont mutate captured value. they can be called more than once.</h2>
            <h2>FnMut() these closure dont move caputured values out of their body and mutate them, can be called more than once.</h2>
            <h2>example:</h2>
            <div className={styles.code_background}> <h2>{code_6}</h2> </div>
            <h2>closure x has captured the y string, we cannot access y now, as its moved in the closure.</h2>
            <h2>the output will be: </h2>
            <div className={styles.code_background}> <h2>{code_7}</h2> </div>
            <h2>there is one more type of closure: FnOnce, it moves the captured value out of the body and it can only be called once.</h2>
            <h2>example:</h2>
            <div className={styles.code_background}> <h2>{code_8}</h2> </div>
            <h2>Sending stuff across threads.</h2>
            <h2>we have seen examples of passing numbers and string to the thread, we could pass them cause all of them implements Send trait which is required to be pass to the thread.</h2>
            <h2>How can we share data among different threads while not sharing the ownership of the data?</h2>
            <h2>we can use Arc and Mutex here.</h2>
            <h2>Arc is a atomic reference counter, which implements Send trait making it safe to be passed to threads.</h2>
            <h2>Mutex allow atomic access to any piece of data.</h2>
            <h2>Here is an example:</h2>

            <div className={styles.code_background}> <h2>{code_9}</h2> </div>
            <h2>we wrap our data in a Mutex then in a Arc, calling clone on Arc increases the reference count. In the thread we use move clause to take ownership of the clone of the Arc, inside thread first lock the mutex to access the value inside it then we increase the value by 10, which also have effect on original value.</h2>
            <h2>once out of thread the x is dropped automatcially, so does the lock and the mutex can be used.
            </h2>
            <h2>now we will see how using channels we can pass values and recieve values from the thread.</h2>


          </div>
        </div>
      </div>
    </div>
  );
}


const code_1 = `pub fn spawn<F, T>(f: F) -> JoinHandle<T>where
F: FnOnce() -> T + Send + 'static,
T: Send + 'static,`;

const code_2 = `use std::thread;

fn main() {
   
    println!("Hello World!");
    let handle:thread::JoinHandle<_> = thread::spawn(||{ println!("from thread") });

    handle.join().unwrap();
}`;

const code_3 = `    let y = 4;
let x = || y+1;
let z = x();
println!("{:?}",z);`;

const code_4 = `    let mut y = String::from("hi");
let mut x = || y.push_str(" bye");
x();
println!("{}",y);`;

const code_5 = `    let mut y = String::from("hi");
let mut x = move || y.push_str(" bye");
x();
println!("{}",y); // ERROR HERE NOW`;
const code_6 = `    let mut y = String::from("hi");
let mut x = move || {y.push_str(" bye"); println!("{}",y)};
x();
x();`;

const code_7 = `hi bye
hi bye bye`;



const code_8 = `    let mut y = String::from("hi");
let x = move || { y.push_str(" bye"); return y};
let z = x();
println!("{}",z);`;
const code_9 = `fn main() {
  let pointer = Arc::new(Mutex::new(10));

  let to_be_sent = pointer.clone();
  thread::spawn(move || {
      let mut x = to_be_sent.lock().unwrap();
      *x = *x + 10;
  })
  .join()
  .unwrap();

  println!("{}", pointer.lock().unwrap());
}`;