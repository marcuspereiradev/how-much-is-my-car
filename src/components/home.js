import React from 'react';
import CarFilter from './car-filter';
import '../styles/container.scss'
import '../styles/home.scss';

const Home = () => {
  return (
    <div>
      <div className='container'>
        <p className='information'>
          Para realizar o cálculo do valor do seu carro, preencha
          os dados abaixo e clique em "Consultar".
        </p>
        <CarFilter />
      </div>
    </div>
  )
}

export default Home;
