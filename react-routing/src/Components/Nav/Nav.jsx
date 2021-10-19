import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <ul className={styles.Nav_List}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/students">Students</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
