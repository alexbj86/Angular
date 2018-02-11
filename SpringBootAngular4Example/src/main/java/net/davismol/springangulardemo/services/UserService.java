package net.davismol.springangulardemo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.davismol.springangulardemo.converters.UserConverter;
import net.davismol.springangulardemo.models.User;
import net.davismol.springangulardemo.repos.UserRepository;
import net.davismol.springangulardemo.viewmodels.UserViewModel;

@Service
public class UserService {

	private @Autowired UserRepository userRepository;
	private @Autowired UserConverter userConverter;
	
	
	public List<UserViewModel> getAllUsers(){
		
		List<User> userList = userRepository.findAll();
		List<UserViewModel> users = userConverter.toViewModelList(userList);
		
		return users;
	}
}
