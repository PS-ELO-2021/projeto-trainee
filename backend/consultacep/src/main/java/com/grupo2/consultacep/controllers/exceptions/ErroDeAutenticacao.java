package com.grupo2.consultacep.controllers.exceptions;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ErroDeAutenticacao implements Serializable {
	private static final long serialVersionUID = 1L;

	private String erro;
	
	@JsonProperty("erro_descricao")
	private String descricao;
	
	public ErroDeAutenticacao() {
		
	}

	public ErroDeAutenticacao(String erro, String descricao) {
		super();
		this.erro = erro;
		this.descricao = descricao;
	}

	public String getErro() {
		return erro;
	}

	public void setErro(String erro) {
		this.erro = erro;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
}
