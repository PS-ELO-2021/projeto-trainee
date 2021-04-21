package com.grupo2.consultacep.services.exceptions;

public class AcessoNegado extends RuntimeException {
	private static final long serialVersionUID = 1L;

	public AcessoNegado(String mensagem) {
		super(mensagem);
	}
}
