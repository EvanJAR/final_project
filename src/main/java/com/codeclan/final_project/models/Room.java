package com.codeclan.final_project.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "rooms")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private RoomType roomType;

    @JsonIgnoreProperties({"room", "house", "baskets"})
    @OneToMany(mappedBy = "room")
    private List<Item> items;

    @ManyToOne
    @JoinColumn(name = "house_id", nullable = false)
    @JsonIgnoreProperties({"rooms", "house"})
    private House house;

    public Room(String name, RoomType roomType, House house){
        this.name = name;
        this.roomType = roomType;
        this.house = house;
        this.items = new ArrayList<>();
    }

    public Room(){};

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(ArrayList<Item> items) {
        this.items = items;
    }

    public RoomType getRoomType() {
        return roomType;
    }

    public void setRoomType(RoomType roomType) {
        this.roomType = roomType;
    }

    @JsonIgnore
    public int getNumberOfItems() {
        return items.size();
    }

    public void addItem(Item item) {
        items.add(item);
    }

    public void removeItem(Item item) {
        items.remove(item);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public House getHouse() {
        return house;
    }

    public void setHouse(House house) {
        this.house = house;
    }
}
