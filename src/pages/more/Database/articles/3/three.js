import { useEffect } from "react";
import styles from "../../../../../styles/styles.module.css"
import SubHeading from "../../../../../main_components/sub_heading"
export const ShowThreeDatabase = (props) => {
  const title = "B+Tree and its use in DBMS";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>
      <h1 className={styles.title}></h1>
      <hr></hr>

    </>
  );
}

