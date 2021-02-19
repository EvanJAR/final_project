package com.codeclan.final_project.models;

import com.codeclan.final_project.repositories.HouseRepository;
import org.junit.Before;
import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.beans.factory.annotation.Autowired;


import static org.junit.Assert.assertEquals;

@SpringBootTest
public class HouseTest {

    House house;
    Item item;
    Item item2;
    Room room;

    @Autowired
    HouseRepository houseRepository;

    @Before
    public void before(){
        house = new House("Evans House");
        room = new Room("Kitchen", RoomType.KITCHEN, house);
        item = new Item("Kitchen Roll", "Plenty", 6.00, "https://www.amazon.co.uk/Plenty-White-Kitchen-Roll-Sheets/dp/B07XD2YQ8N/ref=sr_1_5?crid=2W9SAHO1QDSWQ&dchild=1&keywords=plenty+kitchen+towel&qid=1613564084&sprefix=plenty+%2Caps%2C173&sr=8-5", house, room);
        item2 = new Item("Toothpaste", "Colgate", 2.99, "https://www.amazon.co.uk/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A09690401NIX47JXGB6QH&url=%2FColgate-Total-Whitening-Toothpaste-125%2Fdp%2FB007HKT98U%2Fref%3Dsr_1_4_sspa%3Fcrid%3D1JP4NMM8DWREY%26dchild%3D1%26keywords%3Dcolgate%2Btoothpaste%26qid%3D1613598683%26sprefix%3Dcolgate%2B%252Caps%252C179%26sr%3D8-4-spons%26psc%3D1&qualifier=1613598683&id=4745651708090257&widgetName=sp_atf", house, room);

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
    public void houseStartsWithEmptyListOfRooms(){
        House house = new House("Camerons House"){};
        assertEquals(0, house.getRooms().size());
    }

    @Test
    public void canAddRoomToHouse(){
        House house = new House("Camerons House"){};
        Room room = new Room("Kitchen", RoomType.KITCHEN, house);
        house.addRoom(room);
        assertEquals(1, house.getRooms().size());
    }

    @Test
    public void canDeleteRoom(){
        House house = new House("Camerons House"){};
        Room room = new Room("Kitchen", RoomType.KITCHEN, house);
        house.addRoom(room);
        house.removeRoom(room);
        assertEquals(0, house.getRooms().size());
    }
}
