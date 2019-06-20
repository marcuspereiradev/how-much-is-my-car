import React from 'react';
import '../styles/lightbox.scss';

const Lightbox = ({ car_information, className }) => (
  <div className='lightbox'>
    <div className='lightbox-content'>
      <div className='lightbox-items'>
        <h1>{car_information.marca}</h1>
        <p>{car_information.name} {car_information.combustivel} {car_information.ano_modelo}</p>
        <p className='price'>{car_information.preco}</p>
      </div>
    </div>
  </div>
)

export default Lightbox;
