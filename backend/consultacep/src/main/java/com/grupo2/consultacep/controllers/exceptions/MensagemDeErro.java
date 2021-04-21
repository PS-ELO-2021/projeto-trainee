package com.grupo2.consultacep.controllers.exceptions;

import java.io.Serializable;

public class MensagemDeErro implements Serializable{
	private static final long serialVersionUID = 1L;

	String nome;
	String mensagem;
	
	public MensagemDeErro() {
		
	}

	public MensagemDeErro(String nome, String mensagem) {
		super();
		this.nome = nome;
		this.mensagem = mensagem;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getMensagem() {
		return mensagem;
	}

	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}
	
}
