package com.codeclan.final_project.models;

import org.junit.Before;
import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.Assert.assertEquals;

@SpringBootTest
public class RoomTest {

    Room room;
    
    @Before
    public void before(){
        room = new Room("Kitchen", RoomType.KITCHEN);
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
    
//    @Test
//    void itemListStartsEmpty(){
//        Room
//    }
}
