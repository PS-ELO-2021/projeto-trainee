package com.grupo2.consultacep.services.exceptions;

public class NaoEncontrado extends RuntimeException {
	private static final long serialVersionUID = 1L;

	public NaoEncontrado(String mensagem) {
		super(mensagem);
	}
}
