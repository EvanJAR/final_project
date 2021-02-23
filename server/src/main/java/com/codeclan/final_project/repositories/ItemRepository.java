package com.codeclan.final_project.repositories;

import com.codeclan.final_project.models.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {

    List<Item> findByRoomId(Long id);
//    List <Item> findByBasketsHouseId(Long id);
}
