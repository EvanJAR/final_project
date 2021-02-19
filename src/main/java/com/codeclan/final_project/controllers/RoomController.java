package com.codeclan.final_project.controllers;

import com.codeclan.final_project.models.Room;
import com.codeclan.final_project.repositories.HouseRepository;
import com.codeclan.final_project.repositories.RoomRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

@RestController
public class RoomController {

    @Autowired
    RoomRepository roomRepository;

    @Autowired
    HouseRepository houseRepository;

    @GetMapping("/houses/rooms")
    public ResponseEntity<List<Room>> getAllRooms(){
        List<Room> allRooms = roomRepository.findAll();
        return new ResponseEntity<>(allRooms, HttpStatus.OK);
    }

    @GetMapping("/houses/{id}/rooms")
    public ResponseEntity<Optional<Room>> getRoom(@PathVariable Long id){
        return new ResponseEntity<>(roomRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping("/houses/{houseId}/rooms")
    public ResponseEntity<Room> createRoom(@RequestBody Room room, @PathVariable Long houseId){
        houseId = room.getHouse().getId();
        roomRepository.save(room);
        return new ResponseEntity<>(room, HttpStatus.CREATED);
    }
}
