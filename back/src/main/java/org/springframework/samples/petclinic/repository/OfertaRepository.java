package org.springframework.samples.petclinic.repository;

import java.util.Collection;

import org.springframework.dao.DataAccessException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.samples.petclinic.model.Oferta;
import org.springframework.stereotype.Repository;

@Repository
public interface OfertaRepository extends JpaRepository<Oferta, Integer> {

	Oferta findOfertaById(int id);
	
	Collection<Oferta> findAllOfertas() throws DataAccessException;
	
	@Query(nativeQuery = true, value = "SELECT * FROM Ofertas where expiredate > CURRENT_TIMESTAMP")
	Collection<Oferta> findAllOfertasNotExpire() throws DataAccessException;
	
	void saveOferta(Oferta oferta) throws DataAccessException;
	
	void deleteOferta(Oferta oferta) throws DataAccessException;
	
	void updateOferta(Oferta oferta) throws DataAccessException;
	
}
