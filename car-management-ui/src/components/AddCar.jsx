import React, { useState } from "react";
import CarService from "../services/CarService";
import { useNavigate } from "react-router-dom";

const AddCar = () => {
  const [car, setCar] = useState({
    carId: "",
    carName: "",
    regNo: "",
    ownerMail: "",
  });
  const nav = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setCar({ ...car, [e.target.name]: value });
  };

  const saveCar = () => {
    CarService.addCar(car)
      .then((response) => {
        console.log(response);
        nav("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setCar({
      carId: "",
      carName: "",
      regNo: "",
      ownerMail: "",
    });
  };
  return (
    <div className="flex max-w-2xl shadow mx-auto border-b-2 bg-slate-100">
      <div className="p-8">
        <div className="font-bold text-2xl text-gray-500 tracking-wider">
          <h1 className="">Add new car</h1>
        </div>
        <div className="mt-4 w-full h-16">
          <label className="block text-gray-400">Car Name</label>
          <input
            className="border-2 w-80 p-2"
            type="text"
            name="carName"
            value={car.carName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mt-4 w-full h-16">
          <label className="block text-gray-400">Registration Number</label>
          <input
            className="border-2 w-80 p-2"
            type="text"
            name="regNo"
            value={car.regNo}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mt-4 w-full h-16">
          <label className="block text-gray-400">Owner mail</label>
          <input
            className="border-2 w-80 p-2"
            type="email"
            name="ownerMail"
            value={car.ownerMail}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mt-4 w-full h-16 space-x-4">
          <button
            onClick={saveCar}
            className="bg-blue-600 py-2 px-6 rounded hover:bg-blue-950 text-white"
          >
            Add
          </button>
          <button
            onClick={reset}
            className="bg-red-600 py-2 px-6 rounded hover:bg-red-950 text-white"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
