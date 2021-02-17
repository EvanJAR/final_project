package com.codeclan.final_project.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name = "houses")
public class House {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String houseName;

    @Column
    private Basket basket;

    @OneToMany(mappedBy = "house")
    @JsonIgnoreProperties({"house"})
    private ArrayList<Room> rooms;

    public House(String houseName, Basket basket){
        this.houseName = houseName;
        this.basket = basket;
        this.rooms = new ArrayList<>();
    }

    public House(){};

    public ArrayList<Room> getRooms() {
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
}
