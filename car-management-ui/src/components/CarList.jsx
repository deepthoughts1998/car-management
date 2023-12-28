import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CarService from "../services/CarService";

const CarList = () => {
  const nav = useNavigate();
  const [load, setLoad] = useState(true);
  const [cars, setCars] = useState(null);

  useEffect(() => {
    const getCars = async () => {
      setLoad(true);
      try {
        const res = await CarService.getCars();
        setCars(res.data);
      } catch (error) {
        console.log(error);
      }
      setLoad(false);
    };

    getCars();
  }, []);

  const deleteCar = (e, id) => {
    e.preventDefault();
    CarService.deleteCar(id).then((res) => {
      if (cars) {
        setCars((prevCars) => prevCars.filter((car) => car.carId !== id));
      }
    });
  };

  const editCar = (e, id) => {
    e.preventDefault();
    console.log(`/edit/${id}`);
    nav(`/edit/${id}`);
  };

  return (
    <>
      <div className="h-16 mt-4 border-b">
        <button
          onClick={() => nav("/add")}
          className="h-12 bg-slate-600 hover:bg-gray-800 text-white py-4 px-6 mx-2"
        >
          Add car
        </button>
      </div>
      <div className="shadow-2xl">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="uppercase text-left font-medium text-lg px-4 py-2">
                Car Name
              </th>
              <th className="uppercase text-left font-medium text-lg px-4 py-2">
                Registration no:
              </th>
              <th className="uppercase text-left font-medium text-lg px-4 py-2">
                Owner mail
              </th>
              <th className="uppercase text-left font-medium text-lg px-4 py-2">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {cars &&
              cars.map((car) => {
                return (
                  <tr className="text-gray-600 border-b-2 my-4" key={car.carId}>
                    <td className="text-sm text-left px-4">{car.carName}</td>
                    <td className="text-sm text-left px-4">{car.regNo}</td>
                    <td className="text-sm text-left px-4">{car.ownerMail}</td>
                    <td className="space-x-10 text-sm text-left px-4">
                      <a
                        onClick={(e, carId) => editCar(e, car.carId)}
                        className="text-purple-500 hover:text-blue-500 hover:cursor-pointer"
                      >
                        Edit
                      </a>
                      <a
                        onClick={(e, carId) => deleteCar(e, car.carId)}
                        className="text-purple-500 hover:text-blue-500 hover:cursor-pointer"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CarList;
