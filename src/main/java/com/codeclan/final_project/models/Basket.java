package com.codeclan.final_project.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Any;

import javax.persistence.*;
import java.beans.ConstructorProperties;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "baskets")
public class Basket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToMany
    @JoinTable(
            name = "baskets_items",
            joinColumns = { @JoinColumn(
                    name = "basket_id",
                    nullable = false,
                    updatable = false
            )},
            inverseJoinColumns = { @JoinColumn(

                    name = "item_id",
                    nullable = false,
                    updatable = false
            )}
    )
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

    public void addBasketItem(Item item) {
        basketItems.add(item);
    }

    @JsonIgnore
    public double getTotalPrice() {
        return basketItems
                .stream().mapToDouble(Item::getPrice).sum();
    }

}
