package com.shakir.carmanagement.exception;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "car")
public class CarEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long carId;
    private String carName;
    private String regNo;
    private String ownerMail;
}
