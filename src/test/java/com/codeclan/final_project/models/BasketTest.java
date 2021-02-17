package com.codeclan.final_project.models;

import org.junit.Before;
import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.Assert.assertEquals;

@SpringBootTest
public class BasketTest {

    Room room;
    Basket basket;
    House house;

    @Before
    public void before(){
        basket = new Basket(){};
        house = new House("Evans House", basket);
        room = new Room("Kitchen", RoomType.KITCHEN, house);
    }

    @Test
    public void contextLoads() {
    }

    @Test
    public void basketStartsEmpty(){
        Basket basket = new Basket(){};
        assertEquals(0, basket.getNumberOfItems());
    }

    @Test
    public void canAddItemToBasket(){
        Basket basket = new Basket(){};
        Item item = new Item("Kitchen Roll", "Plenty", 6.00, "https://www.amazon.co.uk/Plenty-White-Kitchen-Roll-Sheets/dp/B07XD2YQ8N/ref=sr_1_5?crid=2W9SAHO1QDSWQ&dchild=1&keywords=plenty+kitchen+towel&qid=1613564084&sprefix=plenty+%2Caps%2C173&sr=8-5", room);
        basket.addItem(item);
        assertEquals(1, basket.getNumberOfItems());
    }

    @Test
    public void canRemoveItemFromBasket(){
        Basket basket = new Basket(){};
        Item item = new Item("Kitchen Roll", "Plenty", 6.00, "https://www.amazon.co.uk/Plenty-White-Kitchen-Roll-Sheets/dp/B07XD2YQ8N/ref=sr_1_5?crid=2W9SAHO1QDSWQ&dchild=1&keywords=plenty+kitchen+towel&qid=1613564084&sprefix=plenty+%2Caps%2C173&sr=8-5", room);
        basket.addItem(item);
        basket.removeItem(item);
    }

    @Test
    public void canGetBasketTotalPrice(){
        Basket basket = new Basket(){};
        Item item = new Item("Kitchen Roll", "Plenty", 6.00, "https://www.amazon.co.uk/Plenty-White-Kitchen-Roll-Sheets/dp/B07XD2YQ8N/ref=sr_1_5?crid=2W9SAHO1QDSWQ&dchild=1&keywords=plenty+kitchen+towel&qid=1613564084&sprefix=plenty+%2Caps%2C173&sr=8-5", room);
        Item item2 = new Item("Kitchen Roll", "Regina", 8.00, "https://www.amazon.co.uk/Regina-Kitchen-Rolls-Extra-Sheets/dp/B07T2SCHM7/ref=sr_1_5?dchild=1&keywords=kitchen+roll&qid=1613565008&sr=8-5", room);
        basket.addItem(item);
        basket.addItem(item2);
        assertEquals(14.00, basket.getTotalPrice(), 0.00);
    }
}
