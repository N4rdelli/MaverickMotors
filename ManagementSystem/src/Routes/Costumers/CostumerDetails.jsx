import styles from './CostumerDetails.module.css';
import { useParams, useNavigate } from 'react-router-dom';

const CostumerDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    
    const handleGoBack = () =>{
        return navigate(-1);
    }

  return (
    <div>
        <h1>Exibindo mais informações do cliente: {id}</h1>
        <button onClick={handleGoBack}>Voltar</button>
    </div>
  )
}

export default CostumerDetails