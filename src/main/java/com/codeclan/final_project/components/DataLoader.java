package com.codeclan.final_project.components;

import com.codeclan.final_project.models.*;
import com.codeclan.final_project.repositories.BasketRepository;
import com.codeclan.final_project.repositories.HouseRepository;
import com.codeclan.final_project.repositories.ItemRepository;
import com.codeclan.final_project.repositories.RoomRepository;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    BasketRepository basketRepository;

    @Autowired
    HouseRepository houseRepository;

    @Autowired
    ItemRepository itemRepository;

    @Autowired
    RoomRepository roomRepository;

    public DataLoader(){};

    public void run(ApplicationArguments args){

        Basket basket1 = new Basket();
        basketRepository.save(basket1);

        Basket basket2 = new Basket();
        basketRepository.save(basket2);

        House house1 = new House("Cameron's House", basket1);
        houseRepository.save(house1);

        House house2 = new House("Evan's House", basket2);
        houseRepository.save(house2);

        Room bathroom1 = new Room("Bathroom", RoomType.BATHROOM, house1);
        roomRepository.save(bathroom1);

        Room bedroom2 = new Room("Bedroom", RoomType.BEDROOM, house2);
        roomRepository.save(bedroom2);

        //Do we really want to have the room as a property in the item class
        //Would we be better creating the item, then having a room.add(item)?
        //By having to instanciate the room into the item class does it leave less flexibility?
        //Same goes for house && room, maybe we want to remove house as a property in room
        //and have the house.add(room)
        Item item1 = new Item("Toothpaste", "Colgate", 2.99, "https://www.amazon.co.uk/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A09690401NIX47JXGB6QH&url=%2FColgate-Total-Whitening-Toothpaste-125%2Fdp%2FB007HKT98U%2Fref%3Dsr_1_4_sspa%3Fcrid%3D1JP4NMM8DWREY%26dchild%3D1%26keywords%3Dcolgate%2Btoothpaste%26qid%3D1613598683%26sprefix%3Dcolgate%2B%252Caps%252C179%26sr%3D8-4-spons%26psc%3D1&qualifier=1613598683&id=4745651708090257&widgetName=sp_atf", bathroom1);
        itemRepository.save(item1);

        Item item2 = new Item("Bedsheet", "Softstuff", 15.99, "https://www.amazon.co.uk/Utopia-Bedding-4-Piece-Bed-Sheet/dp/B075JHKSGJ/ref=sr_1_6?dchild=1&keywords=bed+sheet&qid=1613599365&sr=8-6", bedroom2);
        itemRepository.save(item2);
    }
}
