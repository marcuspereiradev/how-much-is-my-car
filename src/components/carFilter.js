import React from 'react';
import '../styles/car-filter.scss';

const CarFilter = ({
  brands,
  models,
  years,
  handleChangeBrand,
  handleChangeModel,
  handleChangeYear,
  searchButton
}) => (
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
      <select onChange={handleChangeModel} >
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
    <button className='btn' onClick={searchButton} type='button'>Consultar</button>
  </form>
)

export default CarFilter;
