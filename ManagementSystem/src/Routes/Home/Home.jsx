import styles from "./Home.module.css";
import Header from "../../Components/Header/Header";
import HomeCard from "../../Components/HomeCard/HomeCard";

const Home = () => {
  return (
    <div className={styles.homeContent}>
      <Header />
      <div className={styles.homeCards}>
        <HomeCard quantity={"24"} text={"Yards Actives"} route={"/yards"} />
        <HomeCard quantity={"1053"} text={"Vehicles"} route={"/vehicles"} />
        <HomeCard quantity={"304"} text={"Costumers"} route={"/costumers"} />
        <HomeCard quantity={"2730"} text={"Rentals Completed"} route={"/rentals"} />
      </div>
    </div>
  );
};

export default Home;
