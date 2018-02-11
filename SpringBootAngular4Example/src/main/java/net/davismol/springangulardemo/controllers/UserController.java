package net.davismol.springangulardemo.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import net.davismol.springangulardemo.viewmodels.UserViewModel;

@RestController
public class UserController {

	@CrossOrigin
	@RequestMapping(value = "/users", method = {RequestMethod.GET})
	public List<UserViewModel> listAllUsers(){
	
		List<UserViewModel> userList = new ArrayList<>();
		userList.add(new UserViewModel("Davis", "Molinari", "Italy", 34));
		userList.add(new UserViewModel("Lionel", "Messi", "Argentina", 30));
		userList.add(new UserViewModel("Jason", "Bourne", "US", 30));
		
		return userList;
	}
}

