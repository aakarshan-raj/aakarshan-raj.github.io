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
                <li><Link to={"/nodejs"} className="drawer-item">NodeJS </Link></li>
                <li><Link to={"/react"} className="navbar-item">REACT</Link></li>
                <li><Link to={"/alu"} className="drawer-item">ALU </Link></li>
                <li><Link to={"/ram16k"} className="drawer-item">RAM16K </Link></li>
                <li><Link to={"/cpu"} className="drawer-item">CPU </Link></li>
                <li><Link to={"/computer"} className="drawer-item">COMPUTER </Link></li>
                <li><Link to={"/graphs"} className="drawer-item">Graphs </Link></li>

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