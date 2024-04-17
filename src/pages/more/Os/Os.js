import styles from '../../../styles/styles.module.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const ShowOs = (props) => {
  const title = "Operating Systems: Three Easy Pieces";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>
      <hr></hr>
      <h1>1. <Link to="/os/virtualization">Virtualization</Link></h1>
      <h1>2. <Link to="/os/concurrency">Concurrency</Link></h1>
      <h1>3. <Link to="/os/persistence">Persistence</Link></h1>
    </>
  );
}

