import styles from './Vehicles.module.css';
import { Link } from 'react-router-dom';

const Vehicles = () => {
  return (
    <div>
      <h1>Vehicles</h1>
      <Link to={'/vehicles/1'}>Detalhes Veículo 1</Link>
      <Link to={'/vehicles/2'}>Detalhes Veículo 2</Link>
    </div>
  )
}

export default Vehicles