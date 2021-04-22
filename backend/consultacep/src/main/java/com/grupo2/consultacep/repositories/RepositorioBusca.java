package com.grupo2.consultacep.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.grupo2.consultacep.entities.Busca;
import com.grupo2.consultacep.entities.Usuario;

public interface RepositorioBusca extends JpaRepository<Busca, Long>{

	Busca findByCepAndUsuario(String cep, Usuario usuario);
}
