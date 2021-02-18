package com.codeclan.final_project.components;

import com.codeclan.final_project.models.*;
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
    HouseRepository houseRepository;

    @Autowired
    ItemRepository itemRepository;

    @Autowired
    RoomRepository roomRepository;

    public DataLoader(){};

    public void run(ApplicationArguments args){

        House house1 = new House("Cameron's House");
        houseRepository.save(house1);



        House house2 = new House("Evan's House");
        houseRepository.save(house2);


//        rooms for house 1
        Room bathroom1 = new Room("Bathroom", RoomType.BATHROOM, house1);
        roomRepository.save(bathroom1);

        Room kitchen1 = new Room("Kitchen", RoomType.KITCHEN, house1);
        roomRepository.save(kitchen1);

        Room bedroom1 = new Room("Bedroom", RoomType.BEDROOM, house1);
        roomRepository.save(bedroom1);



//        rooms for house 2
        Room office1 = new Room("Office", RoomType.OFFICE, house2);
        roomRepository.save(office1);

        Room bedroom2 = new Room("Bedroom", RoomType.BEDROOM, house2);
        roomRepository.save(bedroom2);

        Room gamesRoom1 = new Room("Games Room", RoomType.OTHER, house2);
        roomRepository.save(gamesRoom1);


//      Items
        Item item1 = new Item("Toothpaste", "Colgate", 2.99, "https://www.amazon.co.uk/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A09690401NIX47JXGB6QH&url=%2FColgate-Total-Whitening-Toothpaste-125%2Fdp%2FB007HKT98U%2Fref%3Dsr_1_4_sspa%3Fcrid%3D1JP4NMM8DWREY%26dchild%3D1%26keywords%3Dcolgate%2Btoothpaste%26qid%3D1613598683%26sprefix%3Dcolgate%2B%252Caps%252C179%26sr%3D8-4-spons%26psc%3D1&qualifier=1613598683&id=4745651708090257&widgetName=sp_atf", bathroom1);
        itemRepository.save(item1);

        Item item2 = new Item("Bedsheet", "Softstuff", 15.99, "https://www.amazon.co.uk/Utopia-Bedding-4-Piece-Bed-Sheet/dp/B075JHKSGJ/ref=sr_1_6?dchild=1&keywords=bed+sheet&qid=1613599365&sr=8-6", bedroom2);
        itemRepository.save(item2);

        Item item3 = new Item("Notebook", "Moleskin", 13.26, "https://www.amazon.co.uk/Moleskine-Classic-Notebook-Elastic-Closure/dp/8862930046/ref=sr_1_5?crid=6CIKCQROVBOR&dchild=1&keywords=moleskine+notebook&qid=1613645622&sprefix=moleskin%2Caps%2C362&sr=8-5", office1);
        itemRepository.save(item3);

        Item item4 = new Item("Choppingboard", "Harcas", 16.97, "https://www.amazon.co.uk/Chopping-Vegetables-Professional-Strength-Durability/dp/B076HMVTL2/ref=sr_1_7?crid=2HHOZRHF4KUHZ&dchild=1&keywords=chopping+board&qid=1613646069&sprefix=chopping%2Caps%2C171&sr=8-7", kitchen1);
        itemRepository.save(item4);

        Item item5 = new Item("Sponge", "Spontex", 5.99, "https://www.amazon.co.uk/Spontex-Specialist-General-Purpose-Scourer/dp/B00JSMK1I2/ref=sr_1_5?dchild=1&keywords=kitchen+sponge&qid=1613651682&sr=8-5", kitchen1);
    }
}
