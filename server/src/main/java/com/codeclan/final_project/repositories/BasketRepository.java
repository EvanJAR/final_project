package com.codeclan.final_project.repositories;

import com.codeclan.final_project.models.Basket;
import com.codeclan.final_project.models.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BasketRepository extends JpaRepository<Basket, Long> {

}
