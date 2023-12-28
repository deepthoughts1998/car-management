import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CarService from "../services/CarService";

const EditCar = () => {
  const { id } = useParams();
  const [car, setCar] = useState({
    carId: id,
    carName: "",
    regNo: "",
    ownerMail: "",
  });

  useEffect(() => {
    const getCar = async () => {
      const res = await CarService.getCar(id);
      setCar(res.data);
    };
    getCar();
  }, []);
  const nav = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setCar({ ...car, [e.target.name]: value });
  };

  const editCar = (e, id) => {
    e.preventDefault();
    CarService.editCar(12, car)
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
      carId: id,
      carName: "",
      regNo: "",
      ownerMail: "",
    });
  };
  return (
    <div className="flex max-w-2xl shadow mx-auto border-b-2 bg-slate-100">
      {car && (
        <div className="p-8">
          <div className="font-bold text-2xl text-gray-500 tracking-wider">
            <h1 className="">Edit car</h1>
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
              onClick={(e, id) => editCar(e, id)}
              className="bg-blue-600 py-2 px-6 rounded hover:bg-blue-950 text-white"
            >
              Edit
            </button>
            <button
              onClick={reset}
              className="bg-red-600 py-2 px-6 rounded hover:bg-red-950 text-white"
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditCar;
