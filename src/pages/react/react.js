import { useEffect } from "react";
import IssueBanner from "../../main_components/issue_banner";
import styles from "../../styles/styles.module.css"
import { Link } from 'react-router-dom';



export const ShowReact = (props) => {
  const title = "React";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>
      <hr></hr>
      <h1>1.<Link to={"/react/one"}>React in Depth</Link></h1>
      <h1>2.<Link to={"/react/two"}>Migrating from Javascript to Typescript in react</Link></h1>
    </>
  );
}