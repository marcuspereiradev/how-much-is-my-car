import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header';
import Home from './pages/home';
import CarDetails from './pages/car-details';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
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
