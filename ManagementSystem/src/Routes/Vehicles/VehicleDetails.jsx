import styles from './VehicleDetails.module.css';
import { useParams, useNavigate } from 'react-router-dom';

const VehicleDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const handleGoBack = () =>{
        return navigate(-1);
    }

  return (
    <div>
        <h1>Exibindo mais informações do veículo: {id}</h1>
        <button onClick={handleGoBack}>Voltar</button>
    </div>
  )
}

export default VehicleDetails