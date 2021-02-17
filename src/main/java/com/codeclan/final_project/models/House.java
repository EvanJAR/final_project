package com.codeclan.final_project.models;

import java.util.ArrayList;

public class House {

    private ArrayList<Room> rooms;

    public House(){
        this.rooms = new ArrayList<>();
    }

    public ArrayList<Room> getRooms() {
        return rooms;
    }

    public void setRooms(ArrayList<Room> rooms) {
        this.rooms = rooms;
    }
}
