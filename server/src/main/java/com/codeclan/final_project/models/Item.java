package com.codeclan.final_project.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "items")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String brand;

    @Column
    private double price;

    @Column(length = 500)
    private String sourceURL;

    @ManyToOne
    @JoinColumn(name = "room_id", nullable = false)
    @JsonIgnoreProperties({"items", "house", "room"})
    private Room room;

    @ManyToMany
    @JsonIgnoreProperties({"basketItems", "house"})
    @JoinTable(
            name = "baskets_items",
            joinColumns = { @JoinColumn(
                    name = "item_id",
                    nullable = false,
                    updatable = false
            )},
            inverseJoinColumns = { @JoinColumn(
                    name = "basket_id",
                    nullable = false,
                    updatable = false
            )}
    )
    private List<Basket> baskets;

    public Item(String name, String brand, double price, String sourceURL, Room room){
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.sourceURL = sourceURL;
        this.room = room;
        this.baskets = new ArrayList<>();
    }

    public Item(){};

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getSourceURL() {
        return sourceURL;
    }

    public void setSourceURL(String sourceURL) {
        this.sourceURL = sourceURL;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public List<Basket> getBaskets() {
        return baskets;
    }

    public void setBaskets(List<Basket> baskets) {
        this.baskets = baskets;
    }

}
