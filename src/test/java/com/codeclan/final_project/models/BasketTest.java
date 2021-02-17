package com.codeclan.final_project.models;

import org.junit.Before;
import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.Assert.assertEquals;

@SpringBootTest
public class BasketTest {

    @Test
    public void contextLoads() {
    }

    @Test
    public void basketStartsEmpty(){
        Basket basket = new Basket(){};
        assertEquals(0, basket.getNumberOfItems());
    }
}
