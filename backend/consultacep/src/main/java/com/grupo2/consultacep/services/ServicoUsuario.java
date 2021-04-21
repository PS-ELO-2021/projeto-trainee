package com.grupo2.consultacep.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.grupo2.consultacep.dto.BuscaDTO;
import com.grupo2.consultacep.dto.InserirUsuarioDTO;
import com.grupo2.consultacep.dto.UsuarioDTO;
import com.grupo2.consultacep.entities.Busca;
import com.grupo2.consultacep.entities.Usuario;
import com.grupo2.consultacep.repositories.RepositorioBusca;
import com.grupo2.consultacep.repositories.RepositorioUsuario;

@Service
public class ServicoUsuario implements UserDetailsService {

	@Autowired
	private RepositorioUsuario repUsuario;

	@Autowired
	private RepositorioBusca repBusca;
	
	@Autowired
	private BCryptPasswordEncoder codificadorDeSenha;
	
	public UsuarioDTO inserir(InserirUsuarioDTO dto) {
		Usuario usuario = new Usuario();
		
		dtoParaEntidade(dto, usuario);
		
		usuario.setSenha(codificadorDeSenha.encode(dto.getSenha()));
		
		usuario = repUsuario.save(usuario);
		
		return new UsuarioDTO(usuario, usuario.getBuscas());
	}
	
	private void dtoParaEntidade(InserirUsuarioDTO dto, Usuario entidade) {
		entidade.setEmail(dto.getEmail());
		entidade.setNome(dto.getNome());
		entidade.getBuscas().clear();
		
		for (BuscaDTO busca: dto.getBuscas()) {
			Busca buscaEntidade = repBusca.getOne(busca.getId());
			entidade.getBuscas().add(buscaEntidade);			
		}
	}
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Usuario usuario = repUsuario.findByEmail(email);
		if(usuario == null) {
			throw new UsernameNotFoundException("Email não encontrado");
		}
		return usuario;
	}
	
}
