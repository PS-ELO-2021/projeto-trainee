package com.grupo2.consultacep.dto;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.grupo2.consultacep.entities.Busca;
import com.grupo2.consultacep.entities.Usuario;

public class UsuarioDTO {

	private Long id;
	
	@NotBlank
	@Email(message = "Email inválido")
	private String email;
	
	@NotBlank(message = "Campo obrigatório")
	private String nome;
	
	private List<BuscaDTO> buscas = new ArrayList<>();

	public UsuarioDTO() {
		
	}

	public UsuarioDTO(Long id, String email, String nome) {
		this.id = id;
		this.email = email;
		this.nome = nome;
	}
	
	public UsuarioDTO(Usuario usuario) {
		this.id = usuario.getId();
		this.email = usuario.getEmail();
		this.nome = usuario.getNome();
	}
	
	public UsuarioDTO(Usuario usuario, Set<Busca> buscas) {
		this(usuario);
		
		buscas.forEach(busca -> this.buscas.add(new BuscaDTO(busca)));
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public List<BuscaDTO> getBuscas() {
		return buscas;
	}

	public void setBuscas(List<BuscaDTO> buscas) {
		this.buscas = buscas;
	}
	
}
