package com.shakir.carmanagement.controller;

import com.shakir.carmanagement.model.Car;
import com.shakir.carmanagement.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class CarController {

    @Autowired
    private CarService carService;

    @PostMapping("/car")
    public Car addCar(@RequestBody Car car){
        return carService.addCar(car);
    }

    @GetMapping("/car")
    public List<Car> getCars(){
        return carService.getCars();
    }

    @GetMapping("/car/{id}")
    public ResponseEntity<Car> getCar(@PathVariable Long id){
        Car car=null;
        car=carService.getCar(id);
        return ResponseEntity.ok(car);
    }

    @DeleteMapping("/car/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteCar(@PathVariable Long id){
        Boolean flag=false;
        flag=carService.deleteCar(id);
        Map<String,Boolean> res=new HashMap<>();
        res.put("Deleted succesfully",flag);
        return ResponseEntity.ok(res);
    }

    @PutMapping("/car/{id}")
    public ResponseEntity<Car> editCar(@PathVariable Long id,@RequestBody Car car){
        car=carService.editCar(id,car);
        return ResponseEntity.ok(car);
    }

}
