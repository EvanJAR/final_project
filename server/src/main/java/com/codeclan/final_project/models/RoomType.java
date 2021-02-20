package com.codeclan.final_project.models;

public enum RoomType {

    KITCHEN (1),
    BATHROOM (2),
    BEDROOM (3),
    LIVINGROOM (4),
    UTILITYROOM (5),
    HALLWAY (6),
    OFFICE (7),
    OTHER (8);

    private final int value;

    private RoomType(int value){
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
