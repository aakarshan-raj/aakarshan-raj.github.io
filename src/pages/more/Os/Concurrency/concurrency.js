import styles from '../../../../styles/styles.module.css';
import { useEffect } from 'react';

export const ShowConcurrency = (props) => {
  const title = "Concurrency";
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

