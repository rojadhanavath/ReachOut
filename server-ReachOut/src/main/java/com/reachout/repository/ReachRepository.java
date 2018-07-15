package com.reachout.repository;
import com.reachout.model.Notes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReachRepository extends JpaRepository<Notes, Long>{
}
