import { Link } from "react-router-dom";
import Drawer from '@mui/material/Drawer';

export const ShowLinks = (props) =>{
    return(
        <div>
        <nav className="navbar">
        <ul className="navbar-list">
        <Drawer anchor="left" open={props.state} onClose={props.stateFunction}>
        <div className="drawer">
        <ul className="drawer-list">
          <Link to={"/nodejs"} className="drawer-item">NodeJS </Link>
        </ul>
        </div>

      </Drawer>
      
      <Link to={"/rust"} className="navbar-item">RUST</Link>
      <Link to={"/react"}className="navbar-item">REACT</Link>
      <Link to={"/cpp"}className="navbar-item">C++</Link>
      <Link to={"/books"} className="navbar-item">BOOKS</Link>
      <Link className="navbar-item" onClick={props.stateFunction}>MORE</Link>

        </ul>
      </nav>
        </div>
    );
}