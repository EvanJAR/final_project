package com.codeclan.final_project.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import com.codeclan.final_project.models.Item;

@Entity
@Table(name = "baskets")
public class Basket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @JsonIgnoreProperties({"basket"})
    @OneToMany(mappedBy = "basket")
    private List<Item> basketItems;

    public Basket(){
        this.basketItems = new ArrayList<>();
    }


    public List<Item> getBasketItems() {
        return basketItems;
    }

    public void setBasketItems(ArrayList<Item> basketItems) {
        this.basketItems = basketItems;
    }

    public int getNumberOfItems() {
        return basketItems.size();
    }

    public void addItem(Item item) {
        basketItems.add(item);
    }

    public void removeItem(Item item) {
        basketItems.remove(item);
    }

    public double getTotalPrice() {

        return basketItems
                .stream().mapToDouble(Item::getPrice).sum();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
