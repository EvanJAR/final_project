package com.codeclan.final_project.repositories;

import com.codeclan.final_project.models.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {
    List<Room> findByHouseId(Long roomId);
}
