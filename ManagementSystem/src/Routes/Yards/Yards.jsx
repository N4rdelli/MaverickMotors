import styles from './Yards.module.css';
import { Link } from "react-router-dom";

const Yards = () => {
  return (
    <div>
        <h1>Yards</h1>
        <Link to={"/yards/1"}>Detalhes sobre o pátio 1</Link>
        <Link to={"/yards/2"}>Detalhes sobre o pátio 2</Link>
    </div>
  )
}

export default Yards