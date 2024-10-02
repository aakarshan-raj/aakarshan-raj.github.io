import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const ShowGraph = (props) => {
  const title = "GRAPHS";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>
      <hr></hr>
      <h1>1.<Link to={"/graph/one"}>Path between two vertices</Link></h1>
      <h1>2.<Link to={"/graph/two"}>Number of connected components in a Graph</Link></h1>
      <h1>3.<Link to={"/graph/three"}>Directed acyclic graph(DAG)</Link></h1>
      <h1>3.<Link to={"/graph/four"}>Compute SCC of a Directed Graph</Link></h1>
    </>
  );
}