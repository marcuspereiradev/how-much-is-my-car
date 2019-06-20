import React, { Component } from 'react';
import Home from './home';
import FipeAPI from '../services/FipeAPI';
import '../styles/container.scss';

class AppContent extends Component {

  constructor() {
    super();
    this.state = {
      brands: [],
      models: [],
      years: [],
      car_information: {},
      brand_id: '',
      model_id: '',
      year_id: ''
    };
  }

  async componentWillMount() {
    const allBrands = await FipeAPI.fetchCarBrands();
    this.setState({ brands: allBrands });
  }

  async handleChangeBrand(event) {
    const brand_id = event.target.value;
    const allModels = await FipeAPI.fetchCarModels(brand_id);
    this.setState({ models: allModels, brand_id: brand_id })
  }

  async handleChangeModel(event) {
    const model_id = event.target.value;
    const brand_id = this.state.brand_id;
    const allYears = await FipeAPI.fetchCarYears(brand_id, model_id);
    this.setState({ years: allYears, model_id: model_id });
  }

  handleChangeYear(event) {
    const year_id = event.target.value;
    this.setState({ year_id: year_id });
  }

  async SearchButton(event) {
    event.preventDefault();
    const brand_id = this.state.brand_id;
    const model_id = this.state.model_id;
    const year_id = this.state.year_id;
    const car_information = await FipeAPI.fetchCarInformation(brand_id, model_id, year_id);
    this.setState({ car_information: car_information });
  }

  render() {
    return (
      <div className=''>
        {console.log(this.state.car_information)}
        <Home
          brands={this.state.brands}
          models={this.state.models}
          years={this.state.years}
          car_information={this.state.car_information}
          handleChangeBrand={(event) => this.handleChangeBrand(event)}
          handleChangeModel={(event) => this.handleChangeModel(event)}
          handleChangeYear={(event) => this.handleChangeYear(event)}
          SearchButton={(event) => this.SearchButton(event)}
        />
      </div>
    )
  }
}

export default AppContent;
