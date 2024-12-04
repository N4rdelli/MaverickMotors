import { useParams, useNavigate } from 'react-router-dom'

const YardDetails = () => {
    const {id} = useParams();

    const navigate = useNavigate();
    
    const handleGoBack = () =>{
        return navigate("/yards");
    }
    
  return (
    <div>
        <h1>Exibindo mais informações do pátio: {id}</h1>
        <button onClick={handleGoBack}>Voltar</button>
    </div>
  )
}

export default YardDetails