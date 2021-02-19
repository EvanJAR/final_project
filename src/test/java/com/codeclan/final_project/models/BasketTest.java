package com.codeclan.final_project.models;

import org.junit.Before;
import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.Assert.assertEquals;

@SpringBootTest
public class BasketTest {

    Basket basket;

    @Before
    public void before(){
        basket = new Basket();
    }

    @Test
    public void basketStartsEmpty(){
        assertEquals(0, basket.getBasketItems().size());
    }
}
