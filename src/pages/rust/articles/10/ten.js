import IssueBanner from "../../../../main_components/issue_banner";
import styles from "../../../../styles/styles.module.css"
import FormatCode from "../../../../main_components/code_formatter"
import { Link } from "react-router-dom";

export const ShowTenRust = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Rustlings Solution and Explaination</h1>
          <hr></hr>
          <h1>1. <Link to="/rust/ten/">Intro</Link></h1>
          <h1>2. <Link to="/rust/ten/">Variables</Link></h1>
          <h1>3. <Link to="/rust/ten/">Functions</Link></h1>
          <h1>4. <Link to="/rust/ten/if">If</Link></h1>
          <h1>5. <Link to="/rust/ten/">Primitive Types</Link></h1>
          <h1>6. <Link to="/rust/ten/">Vectors</Link></h1>
          <h1>7. <Link to="/rust/ten/">Move Semantics</Link></h1>
          <h1>8. <Link to="/rust/ten/">Structs</Link></h1>
          <h1>9. <Link to="/rust/ten/">Enums</Link></h1>
          <h1>9. <Link to="/rust/ten/">Strings</Link></h1>
          <h1>9. <Link to="/rust/ten/">Modules</Link></h1>
          <h1>9. <Link to="/rust/ten/">Hashmaps</Link></h1>
          <h1>9. <Link to="/rust/ten/">Options</Link></h1>
          <h1>9. <Link to="/rust/ten/">Errors</Link></h1>
          <h1>9. <Link to="/rust/ten/">Generics</Link></h1>
          <h1>9. <Link to="/rust/ten/">Traits</Link></h1>
          <h1>9. <Link to="/rust/ten/">Lifetimes</Link></h1>
          <h1>9. <Link to="/rust/ten/">Tests</Link></h1>
          <h1>9. <Link to="/rust/ten/">Iterators</Link></h1>
          <h1>9. <Link to="/rust/ten/">Smart Pointers</Link></h1>
          <h1>9. <Link to="/rust/ten/">Threads</Link></h1>
          <h1>9. <Link to="/rust/ten/">Macros</Link></h1>
          <h1>9. <Link to="/rust/ten/">Clippy</Link></h1>
          <h1>9. <Link to="/rust/ten/">Conversations</Link></h1>
          <h1>9. <Link to="/rust/ten/">Quiz</Link></h1>
          <h1>9. <Link to="/rust/ten/">Understanding Rustlings Project</Link></h1>


        </div>
      </div>
      <IssueBanner />
    </div>
  );
}
