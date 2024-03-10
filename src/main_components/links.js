import { Link } from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import styles from "../styles/styles.module.css"

export const ShowLinks = (props) => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <Drawer anchor="left" open={props.state} onClose={props.stateFunction}>
            <div className="drawer">
              <ol className="drawer-list">
                <li><Link to={"/nodejs"}  onClick={props.stateFunction} className={`${styles.nav_link} navbar-item`}>+NodeJS </Link></li>
                <li><Link to={"/react"}  onClick={props.stateFunction} className={`${styles.nav_link} navbar-item`}>+REACT</Link></li>
                <li><Link to={"/alu"}  onClick={props.stateFunction} className={`${styles.nav_link} navbar-item`}>+ALU </Link></li>
                <li><Link to={"/ram16k"}  onClick={props.stateFunction} className={`${styles.nav_link} navbar-item`}>+RAM16K </Link></li>
                <li><Link to={"/cpu"}  onClick={props.stateFunction} className={`${styles.nav_link} navbar-item`}>+CPU </Link></li>
                <li><Link to={"/computer"}  onClick={props.stateFunction}  className={`${styles.nav_link} navbar-item`}>+COMPUTER </Link></li>
                <li><Link to={"/graphs"}  onClick={props.stateFunction} className={`${styles.nav_link} navbar-item`}>+Graphs </Link></li>

              </ol>
            </div>

          </Drawer>

          <Link to={"/rust"} className={`${styles.nav_link} navbar-item`}>RUST</Link>
          <Link to={"/assembly"} className={`${styles.nav_link} navbar-item`}>ASSEMBLY</Link>
          <Link to={"/cpp"} className={`${styles.nav_link} navbar-item`}>C++</Link>
          <Link to={"/books"} className={`${styles.nav_link} navbar-item`}>BOOKS</Link>
          <Link className={`${styles.nav_link} navbar-item`}onClick={props.stateFunction}>MORE</Link>

        </ul>
      </nav>
    </div>
  );
}