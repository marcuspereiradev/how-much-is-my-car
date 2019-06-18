import React from 'react';

const Home = ({brands, models, years, handleChangeBrand, handleChangeModel, handleChangeYear, SearchButton}) => {
  return (
    <div>
      <header className='header'>
        <h1>Quanto vale meu carro?</h1>
        <p>Um jeito fácil e tranquilo de saber</p>
      </header>

      <p className='information'>
        Para realizar o cálculo do valor do seu carro, preencha
        os dados abaixo e clique em "Consultar".
      </p>
      <form className='form'>
        <label>Marca, modelo e ano</label>
        <hr />
        <select onChange={handleChangeBrand}>
          <option value=''>Selecione uma marca</option>
          {
            brands.map((brand, key) => {
              return <option key={key} value={brand.id}>{brand.name}</option>
            })
          }
        </select>
        <select onChange={handleChangeModel}>
          <option value=''>Selecione um Modelo</option>
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
        <button className='btn' onClick={SearchButton} type='button'>Consultar</button>
      </form>
    </div>
  )

}

export default Home;
