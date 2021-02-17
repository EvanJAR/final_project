package com.codeclan.final_project.models;

import java.util.ArrayList;

public class Room {

    private String name;
    private ArrayList<Item> items;

    public Room(String name){
        this.name = name;
        this.items = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<Item> getItems() {
        return items;
    }

    public void setItems(ArrayList<Item> items) {
        this.items = items;
    }

}
