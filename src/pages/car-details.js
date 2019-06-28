import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FipeAPI from '../services/FipeAPI';

import '../styles/car-details.scss';

class CarDetails extends Component {

  state = {
    carInformation: {}
  }

  async componentWillMount() {
    const { brandId, modelId, yearId } = this.props.match.params;

    const carInformation = await FipeAPI.fetchCarInformation(brandId, modelId, yearId);

    this.setState({ carInformation });
  }

  render() {
    return (
      <div className='container'>
        <div className='car-details-content'>
          <div className='car-details-items'>
            <h3>Sobre o veículo:</h3>
            <p>Marca: <span>{this.state.carInformation.marca}</span></p>
            <p>Modelo: <span>{this.state.carInformation.name}</span></p>
            <p>Combustível: <span>{this.state.carInformation.combustivel}</span></p>
            <p>Ano: <span>{this.state.carInformation.ano_modelo}</span></p>
            <div className='price-content'>
              <p>Preço Médio</p>
              <p className='price'>{this.state.carInformation.preco}</p>
              <p className='reference'>{this.state.carInformation.referencia}</p>
            </div>
            <Link to='/' className='link'>Ver outros modelos</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default CarDetails;
