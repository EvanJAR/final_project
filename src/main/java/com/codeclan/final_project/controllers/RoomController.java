package com.codeclan.final_project.controllers;

import com.codeclan.final_project.models.Room;
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

    @GetMapping("/rooms")
    public ResponseEntity<List<Room>> getAllRooms(){
        List<Room> allRooms = roomRepository.findAll();
        return new ResponseEntity<>(allRooms, HttpStatus.OK);
    }

    @GetMapping("/rooms/{id}")
    public ResponseEntity<Optional<Room>> getRoom(@PathVariable Long id){
        return new ResponseEntity<>(roomRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping("/rooms")
    public ResponseEntity<Room> createRoom(@RequestBody Room room){
        roomRepository.save(room);
        return new ResponseEntity<>(room, HttpStatus.CREATED);
    }
}
