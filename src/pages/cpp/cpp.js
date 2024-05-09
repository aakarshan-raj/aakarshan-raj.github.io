import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const ShowCpp = (props) => {
  const title = "C++";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>

      <hr></hr>
      <h1>1. <Link to="/cpp/one">Shared Pointers in C++</Link></h1>
      <h1>2. <Link to="/cpp/two">ECS Design Pattern</Link></h1>
      <h1>3. <Link to="/cpp/three">Multi-Level Games with ECS</Link></h1>
      <h1>4. <Link to="/cpp/four">Collision Detection</Link></h1>
      <h1>5. <Link to="/cpp/five">Making Chess with SFML and ECS Design Pattern</Link></h1>

    </>
  );
}