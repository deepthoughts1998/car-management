package com.shakir.carmanagement.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Car {
    private long carId;
    private String carName;
    private String regNo;
    private String ownerMail;
}
