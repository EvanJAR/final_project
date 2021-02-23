package com.codeclan.final_project.controllers;

import com.codeclan.final_project.models.House;
import com.codeclan.final_project.models.Item;
import com.codeclan.final_project.repositories.HouseRepository;
import com.codeclan.final_project.repositories.ItemRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;


@RestController
public class BasketItemsController {

    @Autowired
    HouseRepository houseRepository;

    @Autowired
    ItemRepository itemRepository;

    @GetMapping("/houses/{houseId}/basket/items")
    public ResponseEntity<List<Item>> getItemsFromBasket(@PathVariable Long houseId){
        Optional<House> optionalHouse = houseRepository.findById(houseId);
        House house = optionalHouse.get();
        List<Item> basketItems = house.getBasket().getBasketItems();
        return new ResponseEntity<>(basketItems, HttpStatus.OK);
    }

    @PostMapping("/houses/{houseId}/basket/items")
    public ResponseEntity<List<Item>> postItemToBasket(@RequestBody Item item, @PathVariable Long houseId){
        Optional<House> optionalHouse = houseRepository.findById(houseId);
        House house = optionalHouse.get();
        house.addItemToBasket(item);
        houseRepository.save(house);
        List<Item> basketItems = house.getBasket().getBasketItems();
        return new ResponseEntity<>(basketItems, HttpStatus.CREATED);
    }

    @DeleteMapping("houses/{houseId}/basket/{itemId}")
    public ResponseEntity<House> deleteBasketItem(@PathVariable Long houseId, @PathVariable Long itemId) {
        Optional<House> houseOptional = houseRepository.findById(houseId);
        Optional<Item> itemOptional = itemRepository.findById(itemId);
        House house = houseOptional.get();
        Item item = itemOptional.get();
        house.removeItemFromBasket(item);
        houseRepository.save(house);
        return new ResponseEntity<>(house, HttpStatus.NO_CONTENT);
    }
}
