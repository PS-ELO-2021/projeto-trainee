package com.grupo2.consultacep.dto;

public class InserirBuscaDTO extends BuscaDTO{

	private UsuarioDTO usuario;

	public InserirBuscaDTO() {
		super();
	}

	public UsuarioDTO getUsuario() {
		return usuario;
	}

	public void setUsuario(UsuarioDTO usuario) {
		this.usuario = usuario;
	}
	
}
