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
            <p>Marca: <span>{this.state.carInformation.Marca}</span></p>
            <p>Modelo: <span>{this.state.carInformation.Modelo}</span></p>
            <p>Combustível: <span>{this.state.carInformation.Combustivel}</span></p>
            <p>Ano: <span>{this.state.carInformation.AnoModelo}</span></p>
            <div className='price-content'>
              <p>Preço Médio</p>
              <p className='price'>{this.state.carInformation.Valor}</p>
              <p className='reference'>{this.state.carInformation.MesReferencia}</p>
            </div>
            <Link to='/' className='link'>Ver outros modelos</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default CarDetails;
