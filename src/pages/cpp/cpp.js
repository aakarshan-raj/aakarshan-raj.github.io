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
      <h1>1. <Link to="/cpp/shared-pointers">Shared Pointers in C++</Link></h1>
      <h1>2. <Link to="/cpp/ecs">ECS Design Pattern</Link></h1>
      <h1>3. <Link to="/cpp/multi-level-ecs">Multi-Level Games with ECS</Link></h1>
      <h1>4. <Link to="/cpp/collision-detection-and-resolution">Collision Detection</Link></h1>
      <h1>5. <Link to="/cpp/chess">Making Chess with SFML and ECS Design Pattern</Link></h1>

    </>
  );
}