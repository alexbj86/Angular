package net.davismol.springangulardemo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import net.davismol.springangulardemo.services.UserService;
import net.davismol.springangulardemo.viewmodels.UserViewModel;

@RestController
public class UserController {

	private @Autowired UserService userService;
	
	@CrossOrigin
	@RequestMapping(value = "/users", method = {RequestMethod.GET})
	public List<UserViewModel> listAllUsers(){
		return userService.getAllUsers();
	}
}

