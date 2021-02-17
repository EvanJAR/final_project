package com.codeclan.final_project.models;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class HouseTest {

    @Test
    void contextLoads() {
    }

    @Test
    void houseStartsWithEmptyListOfRooms(){
        House house = new House(){};
        assertEquals(0, house.getNumberOfRooms());
    }

    @Test
    void canAddRoomToHouse(){
        House house = new House(){};
        Room room = new Room("Kitchen", RoomType.KITCHEN);
        house.addRoom(room);
        assertEquals(1, house.getNumberOfRooms());
    }
}
