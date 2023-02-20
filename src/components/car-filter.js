import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FipeAPI from '../services/FipeAPI';

import Select from './select';

import '../styles/car-filter.scss';

class CarFilter extends Component {

  state = {
    brands: [],
    models: [],
    years: [],
    brandId: null,
    modelId: null,
    yearId: null,
  }

  async componentWillMount() {
    const brands = await FipeAPI.fetchCarBrands();
    
    this.setState({ brands });
  }

  handleChangeBrand = async (event) => {
    const brandId = event.target.value;

    this.setState({
      models: [],
      years: [],
      brandId: null,
      modelId: null,
      yearId: null,
    });

    if (brandId === '') return;

    const models = await FipeAPI.fetchCarModels(brandId);

    this.setState({ models: models.modelos, brandId })
  }

  handleChangeModel = async (event) => {
    const modelId = event.target.value;
    const brandId = this.state.brandId;

    this.setState({
      years: [],
      modelId: null,
      yearId: null,
    });

    if (modelId === '') return;

    const years = await FipeAPI.fetchCarYears(brandId, modelId);

    this.setState({ years, modelId });
  }

  handleChangeYear = (event) => {
    const yearId = event.target.value;

    this.setState({
      yearId: null
    });

    if (yearId === '') return;

    this.setState({ yearId });
  }

  searchUrl = () => {
    if (this.state.brandId === null || 
        this.state.modelId === null || 
        this.state.yearId === null ) return '#'

    return `/about/${this.state.brandId}/${this.state.modelId}/${this.state.yearId}`;      
  }

  render() {
    return (
      <div className='form' >
        <div className='form-content'>
          <label>Marca, modelo e ano</label>
          <Select
            onChange={this.handleChangeBrand}
            placeholder='Selecione uma marca'
            collection={this.state.brands}
          />

          <Select
            onChange={this.handleChangeModel}
            placeholder='Selecione um modelo'
            collection={this.state.models}
            disabled={this.state.models.length === 0}
          />

          <Select
            onChange={this.handleChangeYear}
            placeholder='Selecione o ano'
            collection={this.state.years}
            disabled={this.state.years.length === 0}
          />
        </div>
        <Link to={this.searchUrl()} 
          className={this.state.yearId === null ? 'btn disabled' : 'btn'} 
          >Consultar
        </Link>
      </div>
    )
  }
}

export default CarFilter;
