import styles from './Home.module.css';
import Header from '../../Components/Header/Header';

const Home = () => {
  return (
    <div className={styles.homeContent}>
      <Header />
      Home
    </div>
  )
}

export default Home