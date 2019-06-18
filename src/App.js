import React, { Component } from 'react';
import axios from 'axios';
import AppContent from './components/app-content';

class App extends Component {
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

  componentWillMount() {
    axios.get(`http://fipeapi.appspot.com/api/1/carros/marcas.json`)
      .then((res) => {
        this.setState({
          brands: res.data
        })
      });
  }

  handleChangeBrand(event) {
    const brand_id = event.target.value;
    axios.get(`http://fipeapi.appspot.com/api/1/carros/veiculos/${brand_id}.json`)
      .then((res) => {
        this.setState({
          models: res.data,
          brand_id: brand_id
        })
      });
  }

  handleChangeModel(event) {
    const model_id = event.target.value;
    axios.get(`http://fipeapi.appspot.com/api/1/carros/veiculo/${this.state.brand_id}/${model_id}.json`)
      .then((res) => {
        this.setState({
          years: res.data,
          model_id: model_id
        })
      });
  }

  handleChangeYear(event) {
    const year_id = event.target.value;
    this.setState({
      year_id: year_id
    })
  }

  SearchButton(event) {
    event.preventDefault();
    axios.get(`http://fipeapi.appspot.com/api/1/carros/veiculo/${this.state.brand_id}/${this.state.model_id}/${this.state.year_id}.json`)
      .then((res) => {
        this.setState({
          car_information: res.data
        })
      })
  }

  render() {
    return (
      <div className="App">
        <AppContent
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
    );
  }
}

export default App;
