package com.grupo2.consultacep.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.grupo2.consultacep.services.validations.UserInsertValid;

@UserInsertValid
public class InserirUsuarioDTO extends UsuarioDTO{

	@NotBlank
	@Size(min = 6, message = "A senha deve ter no mínimo 6 caracteres")
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
