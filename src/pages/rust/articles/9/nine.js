import styles from "../../../../styles/styles.module.css"
import { useEffect } from "react";

export const ShowNineRust = (props) => {
  const title = "Debugging Rust Binary";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>
      <hr></hr>
    </>
  );
}
