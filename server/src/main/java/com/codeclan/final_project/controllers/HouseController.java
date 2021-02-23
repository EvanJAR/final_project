package com.codeclan.final_project.controllers;

import com.codeclan.final_project.models.House;
import com.codeclan.final_project.repositories.HouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class HouseController {

    @Autowired
    HouseRepository houseRepository;

    @GetMapping(value = "/houses")      
    public ResponseEntity<List<House>> getAllHouses(){
        List<House> allHouses = houseRepository.findAll();
        return new ResponseEntity<>(allHouses, HttpStatus.OK);
    }

    @GetMapping(value = "/houses/{id}")
    public ResponseEntity<Optional<House>> getHouse(@PathVariable Long id){
        return new ResponseEntity<>(houseRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping("/houses")
    public ResponseEntity<House> createHouse(@RequestBody House houseBody){
        House house = new House(houseBody.getHouseName());
        houseRepository.save(house);
        return new ResponseEntity<>(house, HttpStatus.CREATED);
    }

    @DeleteMapping("/houses/{id}")
    public ResponseEntity<HttpStatus> deleteHouse(@PathVariable Long id) {
        houseRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}