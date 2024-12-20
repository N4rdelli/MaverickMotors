import styles from './YardDetails.module.css';
import { useParams, useNavigate } from 'react-router-dom';

const YardDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    
    const handleGoBack = () =>{
        return navigate(-1);
    }
    
  return (
    <div>
        <h1>Exibindo mais informações do pátio: {id}</h1>
        <button onClick={handleGoBack}>Voltar</button>
    </div>
  )
}

export default YardDetails