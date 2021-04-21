package com.grupo2.consultacep.dto;

import java.time.Instant;

import com.grupo2.consultacep.entities.Busca;

public class BuscaDTO {

	private Long id;
	
	private String cep;
	
	private String logradouro;
	
	private String bairro;
	
	private String cidade;
	
	private String estado;
	
	private Instant criadoEm;

	public BuscaDTO() {
		
	}

	public BuscaDTO(Long id, String cep, String logradouro, String bairro, String cidade, String estado,
			Instant criadoEm) {
		this.id = id;
		this.cep = cep;
		this.logradouro = logradouro;
		this.bairro = bairro;
		this.cidade = cidade;
		this.estado = estado;
		this.criadoEm = criadoEm;
	}
	
	public BuscaDTO(Busca busca) {
		this.id = busca.getId();
		this.cep = busca.getCep();
		this.logradouro = busca.getLogradouro();
		this.bairro = busca.getBairro();
		this.cidade = busca.getCidade();
		this.estado = busca.getEstado();
		this.criadoEm = busca.getCriadoEm();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getLogradouro() {
		return logradouro;
	}

	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public Instant getCriadoEm() {
		return criadoEm;
	}

	public void setCriadoEm(Instant criadoEm) {
		this.criadoEm = criadoEm;
	}
	
}
