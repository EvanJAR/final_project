package com.codeclan.final_project.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "baskets")
public class Basket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "items")
    private List<Item> basketItems;

    public Basket(){
        this.basketItems = new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Item> getBasketItems() {
        return basketItems;
    }

    public void setBasketItems(List<Item> basketItems) {
        this.basketItems = basketItems;
    }

    @JsonIgnore
    public double getTotalPrice() {
        return basketItems
                .stream().mapToDouble(Item::getPrice).sum();
    }
}
