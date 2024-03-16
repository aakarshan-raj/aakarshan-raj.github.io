import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const ShowAssembly = (props) => {
  const title = "ASSEMBLY";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>

      <hr></hr>
      <h1>1.<Link to={"/Assembly/one"}>SUB RSP,0xh</Link></h1>
      <h1>2.<Link to={"/Assembly/two"}>Instruction Set</Link></h1>
      <h1>3.<Link to={"/Assembly/three"}>Getting started with winDbg and intel manual</Link></h1>
      <h1>4.<Link to={"/Assembly/four"}>Binary bomb lab</Link></h1>

    </>
  );
}