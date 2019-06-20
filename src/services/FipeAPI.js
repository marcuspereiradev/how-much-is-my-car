class FipeAPI {

  static async fetchCarBrands() {
    const response = await fetch('http://fipeapi.appspot.com/api/1/carros/marcas.json');
    const data = await response.json();
    return data;
  }

  static async fetchCarModels(brand_id) {
    const response = await fetch(`http://fipeapi.appspot.com/api/1/carros/veiculos/${brand_id}.json`);
    const data = await response.json();
    return data;
  }

  static async fetchCarYears(brand_id, model_id) {
    const response = await fetch(`http://fipeapi.appspot.com/api/1/carros/veiculo/${brand_id}/${model_id}.json`);
    const data = await response.json();
    return data;
  }

  static async fetchCarInformation(brand_id, model_id, year_id) {
    const response = await fetch(`http://fipeapi.appspot.com/api/1/carros/veiculo/${brand_id}/${model_id}/${year_id}.json`);
    const data = await response.json();
    return data;
  }
}

export default FipeAPI;
