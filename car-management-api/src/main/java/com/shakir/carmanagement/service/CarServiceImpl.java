package com.shakir.carmanagement.service;

import com.shakir.carmanagement.exception.CarEntity;
import com.shakir.carmanagement.model.Car;
import com.shakir.carmanagement.repository.CarRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CarServiceImpl implements CarService{

    @Autowired
    private CarRepository carRepository;

    @Override
    public Boolean deleteCar(Long id) {
        CarEntity carEntity=carRepository.findById(id).get();
        carRepository.delete(carEntity);
        return true;
    }

    @Override
    public Car addCar(Car car) {
        CarEntity carEntity=new CarEntity();

        BeanUtils.copyProperties(car,carEntity);
        carRepository.save(carEntity);
        return car;
    }

    @Override
    public List<Car> getCars() {
        List<CarEntity> carEntities=carRepository.findAll();
        List<Car> cars=carEntities
                .stream()
                .map(car -> new Car(
                        car.getCarId(),
                        car.getCarName(),
                        car.getRegNo(),
                        car.getOwnerMail()
                ))
                .collect(Collectors.toList());
        System.out.println(cars);
        return cars;
    }

    @Override
    public Car editCar(Long id,Car car) {
        CarEntity carEntity=carRepository.findById(car.getCarId()).get();
        carEntity.setCarName(car.getCarName());
        carEntity.setRegNo(car.getRegNo());
        carEntity.setOwnerMail(car.getOwnerMail());
        carRepository.save(carEntity);
        return car;
    }

    @Override
    public Car getCar(Long id) {
        Car car=new Car();
        CarEntity carEntity=carRepository.findById(id).get();
        BeanUtils.copyProperties(carEntity,car);
        return car;
    }


}
