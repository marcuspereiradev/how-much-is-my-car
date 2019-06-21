import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import CarDetails from './components/car-details';
import Footer from './components/footer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route path='/' exact component={Home} />
          <Route path='/about/:brandId/:modelId/:yearId' component={CarDetails} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
