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
      <h1>2.<Link to={"/database/lru-and-lruk"}>LRUK</Link></h1>
      <h1>3.<Link to={"/database/b+tree-and-dbms"}>B+Tree and its use in DBMS</Link></h1>
    </>
  );
}