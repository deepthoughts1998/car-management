package com.shakir.carmanagement.repository;

import com.shakir.carmanagement.exception.CarEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRepository extends JpaRepository<CarEntity,Long> {
}
