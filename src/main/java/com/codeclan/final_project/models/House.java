package com.codeclan.final_project.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "houses")
public class House {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String houseName;


    @OneToMany(mappedBy = "house")
    @JsonIgnoreProperties({"house"})
    private List<Room> rooms;

    public House(String houseName){
        this.houseName = houseName;
        this.rooms = new ArrayList<>();
    }

    public House(){};

    public List<Room> getRooms() {
        return rooms;
    }

    public void setRooms(ArrayList<Room> rooms) {
        this.rooms = rooms;
    }

    public int getNumberOfRooms() {
        return rooms.size();
    }

    public void addRoom(Room room) {
        rooms.add(room);
    }

    public void removeRoom(Room room) {
        rooms.remove(room);
    }

    public String getHouseName() {
        return houseName;
    }

    public void setHouseName(String houseName) {
        this.houseName = houseName;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }


//
//
//    public double getTotalPrice() {
//
//        return basketItems
//                .stream().mapToDouble(Item::getPrice).sum();
}
