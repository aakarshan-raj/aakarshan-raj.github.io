import styles from "./styles.module.css"


export const ShowTwoRust = ()=>{
    return (
      <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
        <h1 className={styles.title}>Borrowing concept in Rust</h1>
          <hr></hr>
            <div className={styles.content}>
         


<h1>Borrowing</h1>

<h2>functions can borrow data without taking ownership of it using references</h2>

<h2>Reference: use a value without taking ownership</h2>

<div className={styles.code_background}>
<h2>fn ref(s: &amp;amp;String) &#123;</h2>
 <h2> println!("{}", &amp;amp;s);</h2>
<h2> &#125;</h2>

<h2>fn main() &#123;</h2>
  <h2>let x = String::from("nothing");</h2>
  <h2>ref(&amp;x);</h2>
  <h2>println!("{}", &amp;x);</h2>
  <h2>&#125;</h2>

  </div>


<h2>Using &amp; operator we can pass a value by reference. The value won't be dropped at the end of the function.</h2>

<h2>The way we pass the value is different from other languages. Rust has type inference to some extent like when we make a variable and assign a value to it, Rust can guess the type. But when we pass the variable to a function we need to specify that it is a reference.</h2>

<h2>To be able to change a reference we need to pass them as mutable references</h2>



  <div className={styles.code_background}>
<h2>fn ref_mut(s: &amp;mut String) &#123; </h2>
<h2>   s.push_str(" nothing");    </h2>
<h2>&#125; </h2>
<h2>fn main() &#123;
 </h2>
<h2>  let s = String::from("something");
</h2>
<h2>  ref_mut(&amp;mut s); </h2>
<h2>println!("{}", &amp;s); </h2>
<h2>&#125;</h2>
  </div>

<h2>In order to have a mutable reference, the value should be mutable.</h2>

<h2>RESTRICTION: We can only have one mutable reference to a variable in a particular scope. This prevents race conditions.</h2>

<h2>But:</h2>

<div className={styles.code_background}>
<h2>fn main() &#123;   </h2>
<h2>    let s = String::from("something");
  </h2>
<h2> let s1 = &amp;mut s; </h2>
<h2>let s2 = &amp;mut s;
 </h2>
<h2> &#125;</h2>
  </div>


<h2>This will work. Rust will automatically remove the references when it sees there is no use.</h2>

  <div className={styles.code_background}>
<h2>fn main() &#123;   </h2>
<h2>     let s = String::from("something");
 </h2>
<h2>   let s1 = &amp;mut s;
 </h2>
<h2>  let s2 = &amp;mut s;
 </h2>
<h2>  println!("{}{}", s1, s2);
 </h2>
<h2> &#125;</h2>
  </div>


<h2>This won't work, as we are using both of these mutable references which violates the rule.</h2>

<h2>Another restriction is that we cannot have one mutable and another immutable reference to the same data. It makes sense as it will create unpredictable behavior at runtime.</h2>

<h2>Dangling Pointers</h2>

<h2>A dangling pointer is a pointer that points to a memory location that is freed.</h2>

<h2>A dangling pointer can be created when we return a reference to a variable that no longer exists.</h2>

  <div className={styles.code_background}>
<h2>fn dang() -&gt; &amp;String &#123;   </h2>
<h2>  let s = String::from("dang");   </h2>
<h2>   &amp;s
 </h2>
<h2> &#125;</h2>
  </div>

  
<h2>This will result in an error. After the function ends executing its code, the memory it took will be freed, including the memory taken for the string 's'.</h2>






         
            </div>
             


            
            </div>
          </div>
        </div>
      );
}

