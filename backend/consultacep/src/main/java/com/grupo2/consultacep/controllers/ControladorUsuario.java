package com.grupo2.consultacep.controllers;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.grupo2.consultacep.dto.InserirUsuarioDTO;
import com.grupo2.consultacep.dto.UsuarioDTO;
import com.grupo2.consultacep.services.ServicoUsuario;

@RestController
@RequestMapping(value = "/registrar")
public class ControladorUsuario {

	@Autowired
	ServicoUsuario servicoUsuario;
	
	@PostMapping
	public ResponseEntity<UsuarioDTO> inserirUsuario(@Valid @RequestBody InserirUsuarioDTO dto) {
		UsuarioDTO usuarioDTO = servicoUsuario.inserir(dto);
		
		URI uri = ServletUriComponentsBuilder
				  .fromCurrentRequest()
				  .path("/{id}")
				  .buildAndExpand(usuarioDTO.getId())
				  .toUri();
		
		return ResponseEntity.created(uri).body(usuarioDTO);
	}
}
