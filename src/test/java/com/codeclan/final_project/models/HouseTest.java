package com.codeclan.final_project.models;

import org.junit.Before;
import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.Assert.assertEquals;

@SpringBootTest
public class HouseTest {

    House house;

    @Before
    public void before(){
        house = new House("Evans House");
    }

    @Test
    public void contextLoads() {
    }

    @Test
    public void houseHasName(){
        House house = new House("Camerons House");
        assertEquals("Camerons House", house.getHouseName());
    }

    @Test
    public void houseBasketItemsStartEmpty(){
        assertEquals(0, house.getNumberOfBasketItems());
    }

    @Test
    public void houseStartsWithEmptyListOfRooms(){
        House house = new House("Camerons House"){};
        assertEquals(0, house.getNumberOfRooms());
    }

    @Test
    public void canAddRoomToHouse(){
        House house = new House("Camerons House"){};
        Room room = new Room("Kitchen", RoomType.KITCHEN, house);
        house.addRoom(room);
        assertEquals(1, house.getNumberOfRooms());
    }

    @Test
    public void canDeleteRoom(){
        House house = new House("Camerons House"){};
        Room room = new Room("Kitchen", RoomType.KITCHEN, house);
        house.addRoom(room);
        house.removeRoom(room);
        assertEquals(0, house.getNumberOfRooms());
    }

}
