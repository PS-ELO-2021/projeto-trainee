package com.grupo2.consultacep.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.grupo2.consultacep.entities.Busca;

public interface RepositorioBusca extends JpaRepository<Busca, Long>{

	Busca findByCep(String cep);
}
