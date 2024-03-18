import { useEffect } from "react";
import styles from "../../../../../styles/styles.module.css"
import { Link } from 'react-router-dom';

export const ShowFourAssembly = (props) => {
  const title = "Binary Bomb Lab";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>

      <h1 className={styles.title}></h1>
      <hr />
      <hr></hr>
      <div className={styles.individual_book}>
        <h1>1.<Link to={"/Assembly/four/phase_1"}>Phase one</Link></h1>
        <h1>2.<Link to={"/Assembly/four/phase_2"}>Phase two</Link></h1>
        <h1>3.<Link to={"/Assembly/four/phase_3"}>Phase three</Link></h1>
        <h1>4.<Link to={"/Assembly/four/phase_4"}>Phase four</Link></h1>
        <h1>5.<Link to={"/Assembly/four/phase_5"}>Phase five</Link></h1>
        <h1>6.<Link to={"/Assembly/four/phase_6"}>Phase six</Link></h1>
      </div>
    </>
  );
}
