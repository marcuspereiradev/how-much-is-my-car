import React from 'react';

const Information = ({ car_information }) => (
  <div>
    <ul>
      <h1>{car_information.preco}</h1>
      <li>{car_information.marca}</li>
      <li>{car_information.name}</li>
      <li>{car_information.ano_modelo}</li>
      <li>{car_information.combustivel}</li>
    </ul>
  </div>
)

export default Information;
