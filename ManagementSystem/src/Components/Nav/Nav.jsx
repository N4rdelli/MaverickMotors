import styles from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation(); // Localiza a página em que estamos
  const isActive = (path) => location.pathname === path; // Verifica a igualdade entre o path da página com o path do navLink

  return (
    <nav>
      <Link to={"/"} className={styles.logoContainer}>
        <img src="/MaverickMotorsLogo.svg" alt="Logo" />
      </Link>
      <div className={styles.navLinksContainer}>
        <Link to={"/yards"} className={`${styles.navLink} ${isActive("/yards") ? styles.active : ""}`}>
          <i class="bi bi-buildings"/>
          <p>Yards</p>
        </Link>
        <Link to={"/vehicles"} className={`${styles.navLink} ${isActive("/vehicles") ? styles.active : ""}`}>
          <i class="bi bi-car-front"/>
          <p>Vehicles</p>
        </Link>
        <Link to={"/costumers"} className={`${styles.navLink} ${isActive("/costumers") ? styles.active : ""}`}>
          <i class="bi bi-people" />
          <p>Costumers</p>
        </Link>
        <Link to={"/rentals"} className={`${styles.navLink} ${isActive("/rentals") ? styles.active : ""}`}>
          <i class="bi bi-card-checklist"/>
          <p>Rentals</p>
        </Link>
        <Link to={"/dashboard"} className={`${styles.navLink} ${isActive("/dashboard") ? styles.active : ""}`}>
          <i class="bi bi-graph-up-arrow"/>
          <p>Dashboard</p>
        </Link>
      </div>
      <button className={styles.navButtonLogout}>
        <i class="bi bi-box-arrow-right"/>
        <p>Logout</p>
      </button>
    </nav>
  );
};

export default Nav;
