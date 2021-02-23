package com.codeclan.final_project.models;

import org.junit.Before;
import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.Assert.assertEquals;

@SpringBootTest
public class BasketTest {

    Basket basket;
    Item item;
    Room room;
    House house;

    @Before
    public void before(){
        house = new House("Evans House");
        basket = new Basket(house);
        room = new Room("Kitchen", RoomType.KITCHEN, house);
        item = new Item("Kitchen Roll", "Plenty", 6.00, "https://www.amazon.co.uk/Plenty-White-Kitchen-Roll-Sheets/dp/B07XD2YQ8N/ref=sr_1_5?crid=2W9SAHO1QDSWQ&dchild=1&keywords=plenty+kitchen+towel&qid=1613564084&sprefix=plenty+%2Caps%2C173&sr=8-5", room);
    }

    @Test
    public void basketStartsEmpty(){
        assertEquals(0, basket.getBasketItems().size());
    }

    @Test
    public void canAddToBasket(){

    }
}
