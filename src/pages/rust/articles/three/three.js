import FormatCode from "../../../../main_components/code_formatter";
import IssueBanner from "../../../../main_components/issue_banner";
import styles from "../../../../styles/styles.module.css"




export const ShowThreeRust = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Traits in Rust</h1>
          <hr></hr>
          <div className={styles.content}>

            <div>
              <h1>Traits group shared functionality for different types that implement them.</h1>

              <h2>what does that mean?</h2>

              <h2>Assume a struct which is a user defined type,  we can provide some functions to this struct instance that it can call.</h2>
              <h2>these functions will be declared within a trait, which can be implmentated by different types.</h2>

              <h2>Example:</h2>

              <h2>here we have defined some types:</h2>
            </div>
            <div className={styles.code_background}> <h2>{code1}</h2> </div>
            <h2>All of these shapes have Area and Parameter.</h2>
            <h2>we can define them under a single trait</h2>
            <div className={styles.code_background}> <h2>{code2}</h2> </div>
            <h2>But the formula for each type is different, </h2>
            <h2>Now to implment a trait for a type:</h2>
            <div className={styles.code_background}> <h2>{code3}</h2> </div>
            <h2>each type has implemented it differently, independent of each other.</h2>
            <h2>to use:</h2>
            <div className={styles.code_background}> <h2>{code4}</h2> </div>

            <h2>what we have done is somewhat similar to polymophism in OOP languages, but its not totally totally similar.</h2>
            <h1>Trait Bound</h1>
            <h2>using trait bound we can restrict a function to work with only types that implment a certain traits.</h2>
            <h2>we will declare a DisplayShape Trait, using it we will define a function that will print the shape of any object that implments DisplayShape.
            </h2>
            <div className={styles.code_background}> <h2>{code5}</h2> </div>
            <h2>we need to implment it now</h2>
            <div className={styles.code_background}> <h2>{code6}</h2> </div>
            <h2>now the function</h2>
            <FormatCode
              code={code7}
            />
            <h2>we declare it to take a Genric `T` and T: DisplayShape specifies to only take genric that implements DisplayShape trait.</h2>
            <h2>The reason to declare a length function is cause we cannot directly access the length property from Sqaure struct objecct due to lack of dynamic dispatch and static type checking. Also it won't make sense cause what if the other genric doesn't have length property.
            </h2>
            <div className={styles.code_background}> <h2>{code8}</h2> </div>
            <h2>Output</h2>
            <div className={styles.code_background}> <h2>{code9}</h2> </div>
            <h2>i know its not the perfect square...</h2>
            <h2>if we try to call the function with other types we will get an error:</h2>
            <h2 style={{ color: "red" }}>the trait bound `Rectangle: DisplayShape` is not satisfied
              the trait `DisplayShape` is implemented for `Square.</h2>


          </div>
        </div>
      </div>
      <IssueBanner />
    </div>
  );
}






const code1 = `struct Rectangle {
  length: u32,
  width: u32,
}

struct Triangle {
  a: u32,
  b: u32,
  c: u32,
  h: u32,
}

struct Square {
  length: u32,
}`;

const code2 = `trait SurfaceInformation {
  fn area(&self) -> u32;
  fn perimeter(&self) -> u32;
}`;

const code3 = `impl SurfaceInformation for Rectangle {
  fn area(&self) -> u32 {
      self.length * self.width
  }
  fn perimeter(&self) -> u32 {
      2 * (self.length + self.width)
  }
}

impl SurfaceInformation for Triangle {
  fn area(&self) -> u32 {
      (0.5 * self.b as f32 * self.h as f32) as u32
  }
  fn perimeter(&self) -> u32 {
      self.a + self.b + self.c
  }
}

impl SurfaceInformation for Square {
  fn area(&self) -> u32 {
      self.length * self.length
  }
  fn perimeter(&self) -> u32 {
      4 * self.length
  }
}
`;

const code4 = ` let rec = Rectangle {
  length: 10,
  width: 5,
};
let tri = Triangle {
  a: 4,
  b: 3,
  c: 2,
  h: 2,
};
let squ = Square { length: 100 };

println!("{} {}", rec.area(), rec.perimeter());
println!("{} {}", tri.area(), tri.perimeter());
println!("{} {}", squ.area(), squ.perimeter());`;

const code5 = `trait DisplayShape{
  fn length(&self)->u32;
}`;

const code6 = `impl DisplayShape for Square{
  fn length(&self)->u32{
      return self.length;
  }
}`;
const code7 = `fn print_square<T: DisplayShape>(squ: &T) {
  let  x = squ.length();
  let horizontal = "..".repeat(x as usize);
  let vertical = format!(": {} :", "  ".repeat((x - 2) as usize));

  for i in 0..x {
      if i == 0 || i == x - 1 {
          println!("{}", horizontal);
      } else {
          println!("{}", vertical);
      }
  }
}`;
const code8 = `let squ = Square { length: 10 };
print_square(&squ);`;
const code9 = `
....................
:                  :
:                  :
:                  :
:                  :
:                  :
:                  :
:                  :
:                  :
....................`;