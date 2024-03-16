import styles from '../../../styles/styles.module.css'
import FormatCode from "../../../main_components/code_formatter"
import SubHeading from "../../../main_components/sub_heading"
import { useEffect } from 'react';

export const ShowComputer = (props) => {
  const title = "Assembling computer with previous components";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>
      <hr></hr>
    </>
  );
}