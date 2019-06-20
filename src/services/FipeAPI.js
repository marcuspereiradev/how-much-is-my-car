class FipeAPI {

  static async fetch_car_brands() {
    const response = await fetch('http://fipeapi.appspot.com/api/1/carros/marcas.json');
    const data = await response.json();
    this.setState({ brands: data });
  }
}

export default FipeAPI;
