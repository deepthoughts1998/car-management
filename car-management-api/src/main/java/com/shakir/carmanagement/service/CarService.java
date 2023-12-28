package com.shakir.carmanagement.service;

import com.shakir.carmanagement.model.Car;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface CarService {
    Boolean deleteCar(Long id);

    Car addCar(Car car);

    List<Car> getCars();

    Car editCar(Long id,Car car);

    Car getCar(Long id);
}
