package com.grupo2.consultacep.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.grupo2.consultacep.entities.Usuario;
import com.grupo2.consultacep.repositories.RepositorioUsuario;
import com.grupo2.consultacep.services.exceptions.NaoAutorizado;

@Service
public class ServicoDeAutenticacao {

	@Autowired
	private RepositorioUsuario repUsuario;
	
	@Transactional(readOnly = true)
	public Usuario usuarioAutenticado() {
		
		try {
			String usuario = SecurityContextHolder.getContext().getAuthentication().getName();
			return repUsuario.findByEmail(usuario);
		} catch (Exception e) {
			throw new NaoAutorizado("Usuário não encontrado");
		}
	}
}
