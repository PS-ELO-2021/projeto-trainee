package com.grupo2.consultacep.controllers.exceptions;

import java.util.ArrayList;
import java.util.List;

public class ErroDeValidacao extends ErroPadrao {
	private static final long serialVersionUID = 1L;

	private List<MensagemDeErro> erros = new ArrayList<>();
	
	public List<MensagemDeErro> getErros() {
		return erros;
	}
	
	public void adicionarErro(String nome, String mensagem) {
		erros.add(new MensagemDeErro(nome, mensagem));
	}
}
