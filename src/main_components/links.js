import { Link } from "react-router-dom";
import Drawer from '@mui/material/Drawer';

export const ShowLinks = (props) => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <Drawer anchor="left" open={props.state} onClose={props.stateFunction}>
            <div className="drawer">
              <ol className="drawer-list">
                <li><Link to={"/nodejs"}  onClick={props.stateFunction} className="drawer-item">NodeJS </Link></li>
                <li><Link to={"/react"}  onClick={props.stateFunction} className="navbar-item">REACT</Link></li>
                <li><Link to={"/alu"}  onClick={props.stateFunction} className="drawer-item">ALU </Link></li>
                <li><Link to={"/ram16k"}  onClick={props.stateFunction}  className="drawer-item">RAM16K </Link></li>
                <li><Link to={"/cpu"}  onClick={props.stateFunction} className="drawer-item">CPU </Link></li>
                <li><Link to={"/computer"}  onClick={props.stateFunction}  className="drawer-item">COMPUTER </Link></li>
                <li><Link to={"/graphs"}  onClick={props.stateFunction}  className="drawer-item">Graphs </Link></li>

              </ol>
            </div>

          </Drawer>

          <Link to={"/rust"} className="navbar-item">RUST</Link>
          <Link to={"/assembly"} className="navbar-item">ASSEMBLY</Link>
          <Link to={"/cpp"} className="navbar-item">C++</Link>
          <Link to={"/books"} className="navbar-item">BOOKS</Link>
          <Link className="navbar-item" onClick={props.stateFunction}>MORE</Link>

        </ul>
      </nav>
    </div>
  );
}