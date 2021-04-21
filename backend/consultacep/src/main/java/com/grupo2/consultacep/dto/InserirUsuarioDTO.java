package com.grupo2.consultacep.dto;

// Anotação de UserInsertValid
public class InserirUsuarioDTO extends UsuarioDTO{

	private String senha;

	public InserirUsuarioDTO() {
		super();
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	
}
