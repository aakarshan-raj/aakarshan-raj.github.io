import { useEffect } from "react";
import styles from "../../../../styles/styles.module.css"

export const ShowOneReact = (props) => {
  const title = "React in depth";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>
      <h1 className={styles.title}></h1>
      <hr></hr>
      <h1>nothing yet</h1>
    </>
  );
}