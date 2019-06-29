class FipeAPI {

  static async fetchCarBrands() {
    try {
      const response = await fetch('http://fipeapi.appspot.com/api/1/carros/marcas.json');
      const data = await response.json();
      return data;
    }
    catch(err) {
      console.error(`Something went wrong in fetchCarBrands ${err}`);
      return [];
    }
  }

  static async fetchCarModels(brandId) {
    try {
      const response = await fetch(`http://fipeapi.appspot.com/api/1/carros/veiculos/${brandId}.json`);
      const data = await response.json();
      return data;
    }
    catch(err) {
      console.error(`Something went wrong in fetchCarModels ${err}`);
      return [];
    }
  }

  static async fetchCarYears(brandId, modelId) {
    try {
      const response = await fetch(`http://fipeapi.appspot.com/api/1/carros/veiculo/${brandId}/${modelId}.json`);
      const data = await response.json();
      return data;
    }
    catch(err) {
      console.error(`Something went wrong in fetchCarYears ${err}`);
      return [];
    }
  }

  static async fetchCarInformation(brandId, modelId, yearId) {
    try {
      const response = await fetch(`http://fipeapi.appspot.com/api/1/carros/veiculo/${brandId}/${modelId}/${yearId}.json`);
      const data = await response.json();
      return data;
    }
    catch(err) {
      console.error("Something went wrong in fetchCarInformation", err);
      return {};
    }
  }
}

export default FipeAPI;
