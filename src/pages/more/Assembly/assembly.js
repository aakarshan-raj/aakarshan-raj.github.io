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
      <h1>1.<Link to={"/Assembly/sub-rsp"}>SUB RSP,0xh</Link></h1>
      <h1>2.<Link to={"/Assembly/instruction-set"}>Instruction Set</Link></h1>
      <h1>3.<Link to={"/Assembly/winDbg-intel-manual"}>Getting started with winDbg and intel manual</Link></h1>
      <h1>4.<Link to={"/Assembly/four"}>Binary bomb lab</Link></h1>

    </>
  );
}