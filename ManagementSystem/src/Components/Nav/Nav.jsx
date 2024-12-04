import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to={"/"} className={styles.logoContainer}>
        <img src="/MaverickMotorsLogo.svg" alt="Logo" />
      </Link>
      <div className={styles.navLinksContainer}>
        <Link to={"/yards"} className={styles.navLink}>
          <img src="https://placehold.co/30x30/394960/394960" alt="Link 1" height={'30px'} />
          Yards
        </Link>
        <Link to={"/vehicles"} className={styles.navLink}>
          <img src="https://placehold.co/30x30/394960/394960" alt="Link 1" height={'30px'} />
          Vehicles
        </Link>
        <Link to={"/costumers"} className={styles.navLink}>
          <img src="https://placehold.co/30x30/394960/394960" alt="Link 1" height={'30px'} />
          Costumers
        </Link>
        <Link to={"/rentals"} className={styles.navLink}>
          <img src="https://placehold.co/30x30/394960/394960" alt="Link 1" height={'30px'} />
          Rentals
        </Link>
        <Link to={"/dashboard"} className={styles.navLink}>
          <img src="https://placehold.co/30x30/394960/394960" alt="Link 1" height={'30px'} />
          Dashboard
        </Link>
      </div>
      <button className={styles.navButtonLogout}>
        <img src="https://placehold.co/20x30/394960/394960" alt="Link 1" />
        Logout
      </button>
    </nav>
  );
};

export default Nav;
