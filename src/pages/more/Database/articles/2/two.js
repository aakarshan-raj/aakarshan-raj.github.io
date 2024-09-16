import { useEffect } from "react";
import styles from "../../../../../styles/styles.module.css"

export const ShowTwoDatabase = (props) => {
  const title = "LRUK";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>
      <hr />
    </>
  );
}
