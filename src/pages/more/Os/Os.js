import styles from '../../../styles/styles.module.css';
import { useEffect } from 'react';

export const ShowOs = (props) => {
  const title = "Interpreter";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>

      <hr></hr>
      <div className={styles.book_content}></div>
    
    </>
  );
}

