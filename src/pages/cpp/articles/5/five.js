import styles from "../../../../styles/styles.module.css"
import FormatCode from "../../../../main_components/code_formatter"
import { useEffect } from "react";

export const ShowFiveCpp = (props) => {
  const title = "Chess";
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