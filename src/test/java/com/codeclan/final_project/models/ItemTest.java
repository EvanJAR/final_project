package com.codeclan.final_project.models;

import org.junit.Before;
import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.Assert.assertEquals;

@SpringBootTest
public class ItemTest {

    Item item;

    @Before
    public void before(){
        item = new Item("Kitchen Roll", "Plenty", 6.00, "https://www.amazon.co.uk/Plenty-White-Kitchen-Roll-Sheets/dp/B07XD2YQ8N/ref=sr_1_5?crid=2W9SAHO1QDSWQ&dchild=1&keywords=plenty+kitchen+towel&qid=1613564084&sprefix=plenty+%2Caps%2C173&sr=8-5");

    }

    @Test
    public void contextLoads() {
    }

    @Test
    public void canUpdateItem(){
        item.setBrand("Regina");
        item.setPrice(8.00);
        item.setSourceURL("https://www.amazon.co.uk/Regina-Kitchen-Rolls-Extra-Sheets/dp/B07T2SCHM7/ref=sr_1_5?dchild=1&keywords=kitchen+roll&qid=1613565008&sr=8-5");
        assertEquals("Regina", item.getBrand());
        assertEquals(8.00, item.getPrice(), 0.00);
        assertEquals("https://www.amazon.co.uk/Regina-Kitchen-Rolls-Extra-Sheets/dp/B07T2SCHM7/ref=sr_1_5?dchild=1&keywords=kitchen+roll&qid=1613565008&sr=8-5", item.getSourceURL());
    }
}
