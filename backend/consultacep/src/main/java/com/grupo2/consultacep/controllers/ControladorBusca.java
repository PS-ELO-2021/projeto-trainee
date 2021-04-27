package com.grupo2.consultacep.controllers;

import java.net.URI;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.grupo2.consultacep.dto.BuscaDTO;
import com.grupo2.consultacep.dto.InserirBuscaDTO;
import com.grupo2.consultacep.entities.Busca;
import com.grupo2.consultacep.entities.Usuario;
import com.grupo2.consultacep.services.ServicoBusca;
import com.grupo2.consultacep.services.ServicoDeAutenticacao;

@RestController
@RequestMapping(value = "/buscas")
public class ControladorBusca {

	@Autowired
	ServicoBusca servicoBusca;
	
	@Autowired
	ServicoDeAutenticacao servicoDeAutenticacao;
	
	@GetMapping
	@Transactional
	public ResponseEntity<List<BuscaDTO>> listaDeBuscas() {
		Usuario usuario = servicoDeAutenticacao.usuarioAutenticado();
		Set<Busca> lista = usuario.getBuscas();	
		
		List<BuscaDTO> listaDTO = lista.stream().map(busca -> new BuscaDTO(busca)).collect(Collectors.toList());
		
		return ResponseEntity.ok().body(listaDTO);
	}
	
	@PostMapping
	public ResponseEntity<BuscaDTO> inserirBusca(@RequestBody InserirBuscaDTO dto) {
		BuscaDTO buscaDTO = servicoBusca.inserir(dto);
		
		URI uri = ServletUriComponentsBuilder
				  .fromCurrentRequest()
				  .path("/{id}")
				  .buildAndExpand(buscaDTO.getId())
				  .toUri();
		
		return ResponseEntity.created(uri).body(buscaDTO);
	}
}
