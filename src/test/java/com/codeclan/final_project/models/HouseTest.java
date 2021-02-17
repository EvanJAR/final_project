package com.codeclan.final_project.models;

import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.Assert.assertEquals;

@SpringBootTest
public class HouseTest {

    @Test
    public void contextLoads() {
    }

    @Test
    public void houseStartsWithEmptyListOfRooms(){
        House house = new House(){};
        assertEquals(0, house.getNumberOfRooms());
    }

    @Test
    public void canAddRoomToHouse(){
        House house = new House(){};
        Room room = new Room("Kitchen", RoomType.KITCHEN);
        house.addRoom(room);
        assertEquals(1, house.getNumberOfRooms());
    }
}
