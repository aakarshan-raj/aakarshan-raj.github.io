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
          <h1>1. <Link to="/rust/ten/intro">Intro</Link></h1>
          <h1>2. <Link to="/rust/ten/variables">Variables</Link></h1>
          <h1>3. <Link to="/rust/ten/functions">Functions</Link></h1>
          <h1>4. <Link to="/rust/ten/if">If</Link></h1>
          <h1>5. <Link to="/rust/ten/primitiveTypes">Primitive Types</Link></h1>
          <h1>6. <Link to="/rust/ten/vecs">Vectors</Link></h1>
          <h1>7. <Link to="/rust/ten/moveSemantics">Move Semantics</Link></h1>
          <h1>8. <Link to="/rust/ten/structs">Structs</Link></h1>
          <h1>9. <Link to="/rust/ten/enums">Enums</Link></h1>
          <h1>9. <Link to="/rust/ten/strings">Strings</Link></h1>
          <h1>9. <Link to="/rust/ten/modules">Modules</Link></h1>
          <h1>9. <Link to="/rust/ten/hashmap">Hashmaps</Link></h1>
          <h1>9. <Link to="/rust/ten/options">Options</Link></h1>
          <h1>9. <Link to="/rust/ten/errors">Errors</Link></h1>
          <h1>9. <Link to="/rust/ten/genetrics">Generics</Link></h1>
          <h1>9. <Link to="/rust/ten/traits">Traits</Link></h1>
          <h1>9. <Link to="/rust/ten/lifetimes">Lifetimes</Link></h1>
          <h1>9. <Link to="/rust/ten/tests">Tests</Link></h1>
          <h1>9. <Link to="/rust/ten/iterators">Iterators</Link></h1>
          <h1>9. <Link to="/rust/ten/smartPointer">Smart Pointers</Link></h1>
          <h1>9. <Link to="/rust/ten/threads">Threads</Link></h1>
          <h1>9. <Link to="/rust/ten/macros">Macros</Link></h1>
          <h1>9. <Link to="/rust/ten/clippy">Clippy</Link></h1>
          <h1>9. <Link to="/rust/ten/conversations">Conversations</Link></h1>
          <h1>9. <Link to="/rust/ten/quiz">Quiz</Link></h1>
          <h1>9. <Link to="/rust/ten/">Understanding Rustlings Project</Link></h1>


        </div>
      </div>
      <IssueBanner />
    </div>
  );
}
