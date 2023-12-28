import axios from "axios";

const URL = "http://localhost:8080/api/v1/car";

class CarService {
  addCar(car) {
    return axios.post(URL, car);
  }

  getCar(id) {
    return axios.get(URL + "/" + id);
  }
  getCars() {
    return axios.get(URL);
  }

  deleteCar(id) {
    return axios.delete(URL + "/" + id);
  }
  editCar(id, car) {
    return axios.put(URL + "/" + id, car);
  }
}

export default new CarService();
