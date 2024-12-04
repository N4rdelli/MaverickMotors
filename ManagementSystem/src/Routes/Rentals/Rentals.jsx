import React from 'react';
import { Link } from "react-router-dom";

const Rentals = () => {
  return (
    <div>
      <h1>Rentals</h1>
        <Link to={"/rentals/1"}>Detalhes sobre o aluguel 1</Link>
        <Link to={"/rentals/2"}>Detalhes sobre o aluguel 2</Link>
    </div>
  )
}

export default Rentals