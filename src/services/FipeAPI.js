class FipeAPI {

  static async fetchCarBrands() {
    try {
      const response = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas');
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
      const response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos`);
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
      const response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos/${modelId}/anos`);
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
      const response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos/${modelId}/anos/${yearId}`);
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
