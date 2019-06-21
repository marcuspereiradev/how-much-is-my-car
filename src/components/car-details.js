import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/car-details.scss';
import FipeAPI from '../services/FipeAPI';

class CarDetails extends Component {

  constructor() {
    super();
    this.state = {
      carInformation: {}
    }
  }

  async componentWillMount() {
    const { brandId, modelId, yearId } = this.props.match.params;
    const carInformation = await FipeAPI.fetchCarInformation(brandId, modelId, yearId);
    this.setState({ carInformation: carInformation })
  }

  render() {
    return (
      <div className='lightbox-content'>
        {console.log(this.state.carInformation)}
        <div className='lightbox-items'>
          <h3>Sobre o veículo:</h3>
          <p>Marca: <span>{this.state.carInformation.marca}</span></p>
          <p>Modelo: <span>{this.state.carInformation.name}</span></p>
          <p>Combustível: <span>{this.state.carInformation.combustivel}</span></p>
          <p>Ano: <span>{this.state.carInformation.ano_modelo}</span></p>
          <p className='price'>{this.state.carInformation.preco}</p>
          <Link to='/' className='link'>Consultar novamente</Link>
        </div>
      </div>
    )
  }
}

export default CarDetails;
