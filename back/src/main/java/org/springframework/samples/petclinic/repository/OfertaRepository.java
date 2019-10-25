package org.springframework.samples.petclinic.repository;

import java.util.Collection;

import org.springframework.dao.DataAccessException;
import org.springframework.samples.petclinic.model.Oferta;

public interface OfertaRepository {

	Oferta findOfertaById(int id);
	
	Collection<Oferta> findAllOfertas() throws DataAccessException;
	
	void saveOferta(Oferta oferta) throws DataAccessException;
	
	void deleteOferta(Oferta oferta) throws DataAccessException;
	
}
