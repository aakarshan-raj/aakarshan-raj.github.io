import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const ShowInterpreter = (props) => {
  const title = "Interpreter";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>

      <hr></hr>
      <h1>1. <Link to="/interpreter/lexer">Lexer</Link></h1>
    </>
  );
}

