import React from 'react';
import Header from './header';
import '../styles/container.scss'
import '../styles/home.scss';
import Footer from './footer';

const Home = ({brands, models, years, handleChangeBrand, handleChangeModel, handleChangeYear, SearchButton}) => {
  return (
    <div>
      <Header />
      <div className='container'>
        <p className='information'>
          Para realizar o cálculo do valor do seu carro, preencha
          os dados abaixo e clique em "Consultar".
        </p>
        <form className='form'>
          <div className='form-content'>
            <label>Marca, modelo e ano</label>
            <select onChange={handleChangeBrand}>
              <option value=''>Selecione uma marca</option>
              {
                brands.map((brand, key) => {
                  return <option key={key} value={brand.id}>{brand.name}</option>
                })
              }
            </select>
            <select onChange={handleChangeModel}>
              <option value=''>Selecione um modelo</option>
              {
                models.map((model, key) => {
                  return <option key={key} value={model.id}>{model.name}</option>
                })
              }
            </select>
            <select onChange={handleChangeYear}>
              <option value=''>Selecione o ano</option>
              {
                years.map((year, key) => {
                  return <option key={key} value={year.id}>{year.name}</option>
                })
              }
            </select>
          </div>
        <button className='btn' onClick={SearchButton} type='button'>Consultar</button>
        </form>
      </div>
      <Footer />
    </div>
  )

}

export default Home;
