import styles from "./HomeCard.module.css";
import { Link } from "react-router-dom";

const HomeCards = ({ quantity, text, route }) => {
  return (
    <div className={styles.homeCardContainer}>
      <div className={styles.homeCardInfo}>
        <h1>{quantity}</h1>
        <h2>{text}</h2>
      </div>
      <Link className={styles.homeCardViewAll} to={route}>
        <hr />
        <h3>View All</h3>
      </Link>
    </div>
  );
};

export default HomeCards;
