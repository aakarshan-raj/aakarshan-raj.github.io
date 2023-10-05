import styles from './styles.module.css';
import { Link } from 'react-router-dom';



export const ShowAssembly = ()=>{
    return (
      <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
        <h1 className={styles.title}>ASSEMBLY</h1>
       
            <hr></hr>
            <h1>1.<Link to={"/Assembly/one"}>SUB RSP,0xh</Link></h1>
            <h1>2.<Link to={"/Assembly/two"}>Instruction Set</Link></h1>
            <h1>3.<Link to={"/Assembly/three"}>Getting started with winDbg and intel manual</Link></h1>

            </div>
          </div>
        </div>
      );
}