import React, { Component } from 'react';
import axios from 'axios';
import Home from './components/home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      brands: [],
      models: [],
      years: [],
      car_Iformation: [],
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
        // console.log(res.data)
        this.setState({
          car_Iformation: res.data
        })
      })
  }

  render() {
    return (
      <div className="App">
        {console.log(this.state.car_Iformation)}
        <Home 
          brands={this.state.brands}
          models={this.state.models}
          years={this.state.years}
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
