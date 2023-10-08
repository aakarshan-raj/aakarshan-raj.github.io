import styles from "../../../../styles/styles.module.css"


export const ShowOneRust = ()=>{
    return (
      <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
        <h1 className={styles.title}>Ownership concept in Rust</h1>
          <hr></hr>
            <div className={styles.content}>
            <h2>Three main ways to handle memory</h2>
            <div className={styles.code_background}>
            <h2>1. Garbage collection</h2>
            <h2>2. Resource Acquisition Is Initialization (RAII).</h2>
            <h2>3. Ownership</h2>
</div>
<h2>rust uses the last way to handle memory and data on Heap.
The concept of ownership exists for data we store in Heap.</h2>
<h2>3 rules of Ownership</h2>
<div className={styles.code_background}>
            <h2>1. Each value has a variable associated to it, known as owner </h2>
<h2>2. Their can be only one owner at a time</h2>
<h2>3. If the owner goes out of scope, so does the value(its dropped)</h2>
  </div>
<h2>To understand Ownership we need to work with a data type that is stored on heap, that is String.</h2>
            
            <h2>A String is made of three parts:</h2>
            
            <div className={styles.code_background}>
              
            <h2>1. a pointer </h2>
            <h2>2. length</h2>
            <h2>3. capacity</h2>
            </div>
            <h2>
            To create a String: <div className={styles.code_background}><h2>let x = String::from(&str);</h2></div>
            </h2>
            
<h2>Remember String's are mutable, they can grow and shrink.

String::from requests the memory from OS that is needed.

Now after it's use we have to free this memory.</h2>

<h2>when the variable goes out of scope, the memory is automatcailly freed,</h2>
<div className={styles.code_background}>
<h2>&#123;</h2>
<h2>let x = String::from("something");</h2>
<h2>&#125;</h2>
<h2>// x is destroyed, the memory it holds is freed.</h2>
</div>
<h2>x is destoryed by calling drop function, which is called after closing bracket.</h2>
<h2>Moving values. </h2>
<h2>
for primitive types like int,char etc that are stored on stack, when we assign a variable to other, rust simply makes a copy
</h2>
<div className={styles.code_background}>
<h2>let x = 3;</h2>
<h2>let y = x;</h2>
</div>
<h2>when we assign a string to other string, we do not copy the data of the string that is the pointer, length and capacity, like we would have though. instead we perform move operation
and transfer the ownership, after this the moved variable will be invalid.
</h2>
<div className={styles.code_background}>
  <h2>let s1 = String::from("nothing");
</h2>
  <h2>let s2 = s1;</h2>
</div>

<h2>

To make a deep copy, copying everything and not invalidating the string that we are copying we can use .clone()
</h2>


<div className={styles.code_background}>
  <h2>let s1 = String::from("nothing");
</h2>
  <h2>let s2 = s1.clone();</h2>
</div>
<h2>If a type implments copy trait, it wont be dropped, for example integers.</h2>

<h2>functions and ownership</h2>
<h2>Passing a value to function will move the value or copy it if its implments copy trait</h2>



<div className={styles.code_background}>
  

<h2>fn take_ownership(s: String) &#123;</h2>
<h2>  println!("{}", s);</h2>
<h2>&#125;</h2>

<h2>fn main() &#123;</h2>
<h2> let s = String::from("something");</h2>
<h2> take_ownership(s);</h2>
<h2> &#125;</h2>

</div>


<h2>1. assigning a value to other variable moves it.</h2>
<h2>2. Variable that points to data on heap goes out of scope, the value will be cleared unless its been moved.</h2>

       
            </div>
             


            
            </div>
          </div>
        </div>
      );
}

