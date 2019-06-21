class FipeAPI {

  static async fetchCarBrands() {
    const response = await fetch('http://fipeapi.appspot.com/api/1/carros/marcas.json');
    const data = await response.json();
    return data;
  }

  static async fetchCarModels(brandId) {
    const response = await fetch(`http://fipeapi.appspot.com/api/1/carros/veiculos/${brandId}.json`);
    const data = await response.json();
    return data;
  }

  static async fetchCarYears(brandId, modelId) {
    const response = await fetch(`http://fipeapi.appspot.com/api/1/carros/veiculo/${brandId}/${modelId}.json`);
    const data = await response.json();
    return data;
  }

  static async fetchCarInformation(brandId, modelId, yearId) {
    const response = await fetch(`http://fipeapi.appspot.com/api/1/carros/veiculo/${brandId}/${modelId}/${yearId}.json`);
    const data = await response.json();
    return data;
  }
}

export default FipeAPI;
