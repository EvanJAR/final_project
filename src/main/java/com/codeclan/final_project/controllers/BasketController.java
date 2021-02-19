package com.codeclan.final_project.controllers;

import com.codeclan.final_project.models.Basket;
import com.codeclan.final_project.repositories.BasketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BasketController {

    @Autowired
    BasketRepository basketRepository;

    @GetMapping(value = "/baskets")
    public ResponseEntity<List<Basket>> getAllBaskets(){
        List<Basket> allBaskets = basketRepository.findAll();
        return new ResponseEntity<>(allBaskets, HttpStatus.OK);
    }
}
