package com.grupo2.consultacep.controllers.exceptions;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.grupo2.consultacep.services.exceptions.AcessoNegado;
import com.grupo2.consultacep.services.exceptions.NaoAutorizado;
import com.grupo2.consultacep.services.exceptions.NaoEncontrado;

@ControllerAdvice
public class InterceptadorDeExcecao {

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<ErroDeValidacao> validacao(MethodArgumentNotValidException erro, 
													 HttpServletRequest requisicao) {
		
		HttpStatus status = HttpStatus.UNPROCESSABLE_ENTITY;
		ErroDeValidacao e = new ErroDeValidacao();
		e.setStatus(status.value());
		e.setErro("Erro de validação");
		e.setMensagem(erro.getMessage());
		e.setCaminho(requisicao.getRequestURI());
		
		for (FieldError f : erro.getBindingResult().getFieldErrors()) {
            e.adicionarErro(f.getField(), f.getDefaultMessage());
        }
		
		return ResponseEntity.status(status).body(e);
	}
	
	@ExceptionHandler(NaoEncontrado.class)
	public ResponseEntity<ErroPadrao> validacao(NaoEncontrado erro, 
													 HttpServletRequest requisicao) {
		
		HttpStatus status = HttpStatus.NOT_FOUND;
		ErroDeValidacao e = new ErroDeValidacao();
		e.setStatus(status.value());
		e.setErro("Não encontrado.");
		e.setMensagem(erro.getMessage());
		e.setCaminho(requisicao.getRequestURI());
		
		return ResponseEntity.status(status).body(e);
	}
	
	@ExceptionHandler(NaoAutorizado.class)
	public ResponseEntity<ErroDeAutenticacao> validacao(NaoAutorizado erro, 
													 HttpServletRequest requisicao) {
		
		ErroDeAutenticacao e = new ErroDeAutenticacao("Não autorizado", erro.getMessage());
		
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e);
	}
	
	@ExceptionHandler(AcessoNegado.class)
	public ResponseEntity<ErroDeAutenticacao> validacao(AcessoNegado erro, 
													 HttpServletRequest requisicao) {
		
		ErroDeAutenticacao e = new ErroDeAutenticacao("Acesso Negado", erro.getMessage());
		
		return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e);
	} 
}
