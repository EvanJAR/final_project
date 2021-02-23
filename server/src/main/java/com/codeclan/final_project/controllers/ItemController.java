package com.codeclan.final_project.controllers;

import com.codeclan.final_project.models.Item;
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


    @GetMapping("/rooms/items")
    public ResponseEntity<List<Item>> getAllRoomItems(){
        List<Item> allItems = itemRepository.findAll();
        return new ResponseEntity<>(allItems, HttpStatus.OK);
    }

    @GetMapping("/rooms/{roomId}/items")
    public ResponseEntity<List<Item>> getItemsFromRoom(@PathVariable Long roomId){
        List<Item> roomItems = itemRepository.findByRoomId(roomId);
        return new ResponseEntity<>(roomItems, HttpStatus.OK);
    }

    @GetMapping("/rooms/{roomId}/items/{itemId}")
    public ResponseEntity<Optional<Item>> getItem(@PathVariable Long roomId, @PathVariable Long itemId){
        return new ResponseEntity<>(itemRepository.findById(itemId), HttpStatus.OK);
    }

    //
    @PostMapping("/rooms/{roomId}/items")
    public ResponseEntity<Item> createItemInRoom(@RequestBody Item item, @PathVariable Long roomId){
        roomId = item.getRoom().getId();
        itemRepository.save(item);
        return new ResponseEntity<>(item, HttpStatus.CREATED);
    }

    @DeleteMapping("/rooms/{roomId}/items/{itemId}")
    public ResponseEntity<HttpStatus> deleteItem(@PathVariable Long roomId, @PathVariable Long itemId) {
        itemRepository.deleteById(itemId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
