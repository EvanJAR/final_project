package com.codeclan.final_project.controllers;

import com.codeclan.final_project.models.Item;
import com.codeclan.final_project.models.Room;
import com.codeclan.final_project.repositories.ItemRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;


@RestController
public class ItemController {

    @Autowired
    ItemRepository itemRepository;

    @GetMapping("/items")
    public ResponseEntity<List<Item>> getAllRooms(){
        List<Item> allItems = itemRepository.findAll();
        return new ResponseEntity<>(allItems, HttpStatus.OK);
    }

    @GetMapping("/items/{id}")
    public ResponseEntity<Optional<Item>> getItem(@PathVariable Long id){
        return new ResponseEntity<>(itemRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping("/items")
    public ResponseEntity<Item> createRoom(@RequestBody Item item){
        itemRepository.save(item);
        return new ResponseEntity<>(item, HttpStatus.CREATED);
    }
}
