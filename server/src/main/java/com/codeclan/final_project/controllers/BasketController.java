package com.codeclan.final_project.controllers;

import com.codeclan.final_project.models.Basket;
import com.codeclan.final_project.repositories.BasketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class BasketController {

    @Autowired
    BasketRepository basketRepository;

    @GetMapping(value = "/baskets")
    public ResponseEntity<List<Basket>> getAllBaskets(){
        List<Basket> allBaskets = basketRepository.findAll();
        return new ResponseEntity<>(allBaskets, HttpStatus.OK);
    }

    @GetMapping(value = "/baskets/{id}")
    public ResponseEntity<Optional<Basket>> getBasketById(@PathVariable Long id){
        return new ResponseEntity<>(basketRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/baskets")
    public ResponseEntity<Basket> createBasket(@RequestBody Basket basket){
        basketRepository.save(basket);
        return new ResponseEntity<>(basket, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/baskets/{basketId}")
    public ResponseEntity<HttpStatus> deleteBasket(@PathVariable Long basketId){
        basketRepository.deleteById(basketId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }



}
