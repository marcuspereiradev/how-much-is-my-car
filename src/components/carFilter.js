import React, { Component } from 'react';
import FipeAPI from '../services/FipeAPI';
import '../styles/car-filter.scss';

class CarFilter extends Component {

  constructor() {
    super();
    this.state = {
      brands: [],
      models: [],
      years: [],
      carInformation: {},
      brandId: '',
      modelId: '',
      yearId: '',
    };
  }

  async componentWillMount() {
    const allBrands = await FipeAPI.fetchCarBrands();
    this.setState({ brands: allBrands });
  }

  async handleChangeBrand(event) {
    const brandId = event.target.value;
    const allModels = await FipeAPI.fetchCarModels(brandId);
    this.setState({ models: allModels, brandId: brandId })
  }

  async handleChangeModel(event) {
    const modelId = event.target.value;
    const brandId = this.state.brandId;
    const allYears = await FipeAPI.fetchCarYears(brandId, modelId);
    this.setState({ years: allYears, modelId: modelId });
  }

  handleChangeYear(event) {
    const yearId = event.target.value;
    this.setState({ yearId: yearId });
  }

  async searchButton(event) {
    event.preventDefault();
    const { brandId, modelId, yearId} = this.state;
    const carInformation = await FipeAPI.fetchCarInformation(brandId, modelId, yearId);
    this.setState({ carInformation: carInformation });
  }

  render() {
    return (
      <form className='form'>
        <div className='form-content'>
          <label>Marca, modelo e ano</label>
          <select onChange={(event) => this.handleChangeBrand(event)}>
            <option value=''>Selecione uma marca</option>
            {
              this.state.brands.map((brand, key) => {
                return <option key={key} value={brand.id}>{brand.name}</option>
              })
            }
          </select>
          <select onChange={(event) => this.handleChangeModel(event)} >
            <option value=''>Selecione um modelo</option>
            {
              this.state.models.map((model, key) => {
                return <option key={key} value={model.id}>{model.name}</option>
              })
            }
          </select>
          <select onChange={(event) => this.handleChangeYear(event)}>
            <option value=''>Selecione o ano</option>
            {
              this.state.years.map((year, key) => {
                return <option key={key} value={year.id}>{year.name}</option>
              })
            }
          </select>
        </div>
        <button className='btn' onClick={(event) => this.searchButton(event)} type='button'>Consultar</button>
      {console.log(this.state.carInformation)}
      </form>
    )
  }
}

export default CarFilter;
