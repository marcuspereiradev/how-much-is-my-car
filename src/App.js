import React, { Component } from 'react';
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
    fetch('http://fipeapi.appspot.com/api/1/carros/marcas.json')
      .then((res) => res.json())
      .then((res) => this.setState({brands: res}))
  }

  handleChangeBrand(event) {
    const brand_id = event.target.value;
    fetch(`http://fipeapi.appspot.com/api/1/carros/veiculos/${brand_id}.json`)
      .then((res) => res.json())
      .then((res) => this.setState({
        models: res,
        brand_id: brand_id
      }))
  }

  handleChangeModel(event) {
    const model_id = event.target.value;
    fetch(`http://fipeapi.appspot.com/api/1/carros/veiculo/${this.state.brand_id}/${model_id}.json`)
      .then((res) => res.json())
      .then((res) => this.setState({
        years: res,
        model_id: model_id
      }))
  }

  handleChangeYear(event) {
    const year_id = event.target.value;
    this.setState({
      year_id: year_id
    })
  }

  SearchButton(event) {
    event.preventDefault();
    fetch(`http://fipeapi.appspot.com/api/1/carros/veiculo/${this.state.brand_id}/${this.state.model_id}/${this.state.year_id}.json`)
      .then((res) => res.json())
      .then((res) => this.setState({
        car_information: res
      }))
  }

  render() {
    return (
      <div className="App">
        {console.log(this.state.car_information)}
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
