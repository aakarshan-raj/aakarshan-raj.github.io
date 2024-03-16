import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const ShowNodejs = (props) => {
  const title = "NodeJs";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>
      <hr></hr>
      <h1>1.<Link to={"/nodejs/one"}>Setting up Mongoose with NodeJs</Link></h1>
      <h1>2.<Link to={"/nodejs/two"}>Using Mongoose in NodeJs.</Link></h1>

    </>
  );
}