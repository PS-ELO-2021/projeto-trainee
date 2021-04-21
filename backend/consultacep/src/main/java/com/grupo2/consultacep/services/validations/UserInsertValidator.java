package com.grupo2.consultacep.services.validations;

import java.util.ArrayList;
import java.util.List;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import com.grupo2.consultacep.controllers.exceptions.MensagemDeErro;
import com.grupo2.consultacep.dto.InserirUsuarioDTO;
import com.grupo2.consultacep.entities.Usuario;
import com.grupo2.consultacep.repositories.RepositorioUsuario;

public class UserInsertValidator implements ConstraintValidator<UserInsertValid, InserirUsuarioDTO> {
	
	@Autowired
	private RepositorioUsuario repository;
	
	@Override
	public void initialize(UserInsertValid ann) {
	}

	@Override
	public boolean isValid(InserirUsuarioDTO dto, ConstraintValidatorContext context) {
		
		List<MensagemDeErro> list = new ArrayList<>();
		
		Usuario usuario = repository.findByEmail(dto.getEmail());
		
		if (usuario != null) {
			list.add(new MensagemDeErro("email", "Email já existente"));
		}
		
		for (MensagemDeErro e : list) {
			context.disableDefaultConstraintViolation();
			context.buildConstraintViolationWithTemplate(e.getMensagem()).addPropertyNode(e.getNome())
					.addConstraintViolation();
		}
		return list.isEmpty();
	}
}
