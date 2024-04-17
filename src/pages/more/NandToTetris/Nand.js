import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const ShowNand = (props) => {
  const title = "NandToTetris Projects";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>
      <hr></hr>
      <h1>1. <Link to="/NandToTetris/alu">Making ALU: Arithmetic Logic Unit</Link></h1>
      <h1>2. <Link to="/NandToTetris/ram16k">Making RAM16k from Logic gates</Link></h1>
      <h1>3. <Link to="/NandToTetris/cpu">Making CPU: Central Processing Unit</Link></h1>
      <h1>4. <Link to="/NandToTetris/computer">Making a computer from previous components</Link></h1>
    </>
  );
}