package org.springframework.samples.petclinic.repository;

import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.samples.petclinic.model.Oferta;
import org.springframework.stereotype.Repository;

@Repository
public interface OfertaRepository extends JpaRepository<Oferta, Integer> {

	Oferta findById(int id);
	
	List<Oferta> findAll() throws DataAccessException;
	
	@Query(nativeQuery = true, value = "SELECT * FROM Ofertas where expiredate > CURRENT_TIMESTAMP")
	List<Oferta> findAllNotExpire() throws DataAccessException;
	
}
