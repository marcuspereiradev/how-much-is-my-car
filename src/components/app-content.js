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
    const response = await fetch('http://fipeapi.appspot.com/api/1/carros/marcas.json');
    const data = await response.json();
    this.setState({ brands: data });
  }

  async handleChangeBrand(event) {
    const brand_id = event.target.value;
    const response = await fetch(`http://fipeapi.appspot.com/api/1/carros/veiculos/${brand_id}.json`);
    const data = await response.json();
    this.setState({ models: data, brand_id: brand_id });
  }

  async handleChangeModel(event) {
    const model_id = event.target.value;
    const response = await fetch(`http://fipeapi.appspot.com/api/1/carros/veiculo/${this.state.brand_id}/${model_id}.json`);
    const data = await response.json()
    this.setState({ years: data, model_id: model_id });
  }

  handleChangeYear(event) {
    const year_id = event.target.value;
    this.setState({ year_id: year_id });
  }

  async SearchButton(event) {
    event.preventDefault();
    const response = await fetch(`http://fipeapi.appspot.com/api/1/carros/veiculo/${this.state.brand_id}/${this.state.model_id}/${this.state.year_id}.json`);
    const data = await response.json();
    this.setState({ car_information: data });
  }

  render() {
    return (
      <div className=''>
        {console.log(this.state.car_information)}
        {/* {console.log(fetch_car_brands)} */}
        <Home
          // brands={() => this.FipeAPI.fetch_car_brands()}
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
