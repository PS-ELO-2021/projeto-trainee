package com.grupo2.consultacep.services.exceptions;

public class NaoAutorizado extends RuntimeException{
	private static final long serialVersionUID = 1L;

	public NaoAutorizado(String mensagem) {
		super(mensagem);
	}
}
