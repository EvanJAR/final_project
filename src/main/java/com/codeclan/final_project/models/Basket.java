package com.codeclan.final_project.models;

import java.util.ArrayList;

public class Basket {

    private ArrayList<Item> basketItems;

    public Basket(){
        this.basketItems = new ArrayList<>();
    }

    public ArrayList<Item> getBasketItems() {
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
}
