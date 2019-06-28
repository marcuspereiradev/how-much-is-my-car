import React from 'react';

import CarFilter from '../components/car-filter';

import '../styles/container.scss'
import '../styles/home.scss';

const Home = () => {
  return (
    <div className='container'>
      <p className='information'>
        Para saber o valor do seu carro, preencha
        os dados abaixo e clique em "Consultar".
      </p>
      <CarFilter />
    </div>
  )
}

export default Home;
