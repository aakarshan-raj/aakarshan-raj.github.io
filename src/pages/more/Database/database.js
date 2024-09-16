import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const ShowDatabase = (props) => {
  const title = "Database";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>
      <hr></hr>
      <h1>1.<Link to={"/database/trie"}>Trie data structures</Link></h1>
      <h1>1.<Link to={"/database/LRUK"}>LRUK</Link></h1>
    </>
  );
}