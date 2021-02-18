package com.codeclan.final_project.models;

import org.junit.Before;
import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.Assert.assertEquals;

@SpringBootTest
public class RoomTest {

    Room room;
    Item item;
    House house;
    Basket basket;
    
    @Before
    public void before(){
        basket = new Basket(house){};
        house = new House("Evans House", basket);
        room = new Room("Kitchen", RoomType.KITCHEN, house);
        item = new Item("Kitchen Roll", "Plenty", 6.00, "https://www.amazon.co.uk/Plenty-White-Kitchen-Roll-Sheets/dp/B07XD2YQ8N/ref=sr_1_5?crid=2W9SAHO1QDSWQ&dchild=1&keywords=plenty+kitchen+towel&qid=1613564084&sprefix=plenty+%2Caps%2C173&sr=8-5", room);
    }
    
    @Test
    public void contextLoads() {
    }

    @Test
    public void roomHasName() {
        assertEquals("Kitchen", room.getName());
    }

    @Test
    public void roomHasType(){
        assertEquals(RoomType.KITCHEN, room.getRoomType());
    }
    
    @Test
    public void itemListStartsEmpty(){
        assertEquals(0, room.getNumberOfItems());
    }

    @Test
    public void canAddItemToRoom(){
        room.addItem(item);
        assertEquals(1, room.getNumberOfItems());
    }

    @Test
    public void canRemoveItem(){
        room.addItem(item);
        room.removeItem(item);
        assertEquals(0, room.getNumberOfItems());
    }

}
