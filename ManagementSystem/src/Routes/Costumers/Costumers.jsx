import styles from './Costumers.module.css'
import { Link } from "react-router-dom";

const Costumers = () => {
  return (
    <div>
      <h1>Costumers</h1>
        <Link to={"/costumers/1"}>Detalhes sobre o cliente 1</Link>
        <Link to={"/costumers/2"}>Detalhes sobre o cliente 2</Link>
    </div>
  )
}

export default Costumers