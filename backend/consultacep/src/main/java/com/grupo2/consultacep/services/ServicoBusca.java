package com.grupo2.consultacep.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.grupo2.consultacep.dto.BuscaDTO;
import com.grupo2.consultacep.dto.InserirBuscaDTO;
import com.grupo2.consultacep.entities.Busca;
import com.grupo2.consultacep.entities.Usuario;
import com.grupo2.consultacep.repositories.RepositorioBusca;
import com.grupo2.consultacep.repositories.RepositorioUsuario;

@Service
public class ServicoBusca {

	@Autowired
	RepositorioUsuario repUsuario;
	
	@Autowired
	RepositorioBusca repBusca;
	
	@Autowired
	ServicoDeAutenticacao servicoDeAutenticacao;
	
	@Transactional
	public BuscaDTO inserir(InserirBuscaDTO dto) {
		Busca entidade = new Busca();
		Usuario usuario = servicoDeAutenticacao.usuarioAutenticado();
		
		if(repBusca.findByCepAndUsuario(dto.getCep(), usuario) != null) {
			Busca busca = repBusca.findByCepAndUsuario(dto.getCep(), usuario);
			busca.setCriadoEm(Instant.now());
			repBusca.save(busca);
			return new BuscaDTO(busca);
		}
		else {
			dtoParaEntidade(dto, entidade);
			
			entidade = repBusca.save(entidade);
			
			return new BuscaDTO(entidade);
		}
		
	}
	
	public void dtoParaEntidade(InserirBuscaDTO dto, Busca entidade) {
		entidade.setBairro(dto.getBairro());
		entidade.setCep(dto.getCep());
		entidade.setCidade(dto.getCidade());
		entidade.setEstado(dto.getEstado());
		entidade.setCriadoEm(Instant.now());
		entidade.setLogradouro(dto.getLogradouro());
		
		Usuario usuario = repUsuario.getOne(dto.getUsuario().getId());
		entidade.setUsuario(usuario);
	}
}
