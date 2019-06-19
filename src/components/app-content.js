import React from 'react';
import Home from './home';
import '../styles/container.scss'

const AppContent = ({brands, models, years, car_information, handleChangeBrand, handleChangeModel, handleChangeYear, SearchButton}) => (
  <div className=''>
    <Home
      brands={brands}
      models={models}
      years={years}
      car_information={car_information}
      handleChangeBrand={handleChangeBrand}
      handleChangeModel={handleChangeModel}
      handleChangeYear={handleChangeYear}
      SearchButton={SearchButton}
      />
  </div>
)

export default AppContent;
