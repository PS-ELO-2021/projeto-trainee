package com.grupo2.consultacep.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.grupo2.consultacep.entities.Usuario;

public interface RepositorioUsuario extends JpaRepository<Usuario, Long>{

}
