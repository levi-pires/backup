package com.ethos.server.domain.repo;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.ethos.server.domain.model.EClient;

@Repository
public interface EClientRepository extends JpaRepository<EClient, Long>{
	EClient findByUser(String user);
}