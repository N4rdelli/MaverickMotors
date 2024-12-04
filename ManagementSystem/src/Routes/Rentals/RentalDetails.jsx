import styles from "./RentalDetails.module.css";
import { useParams, useNavigate } from "react-router-dom";

const RentalDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    return navigate(-1);
  };

  return (
    <div>
      <h1>Exibindo mais informações do aluguel: {id}</h1>
      <button onClick={handleGoBack}>Voltar</button>
    </div>
  );
};

export default RentalDetails;
