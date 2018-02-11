package net.davismol.springangulardemo.converters;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import net.davismol.springangulardemo.models.User;
import net.davismol.springangulardemo.viewmodels.UserViewModel;

@Component
public class UserConverter implements IModelViewModelConverter<User, UserViewModel> {

	@Override
	public User fromViewModel(UserViewModel vm) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<User> fromViewModelList(List<UserViewModel> vmList) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UserViewModel toViewModel(User m) {
		UserViewModel uvm = new UserViewModel();
		
		uvm.setFirstname(m.getFirstname());
		uvm.setLastname(m.getLastname());
		uvm.setCountry(m.getCountry());
		uvm.setAge(m.getAge());
		
		return uvm;
	}

	@Override
	public List<UserViewModel> toViewModelList(List<User> mList) {
		
		List<UserViewModel> users = new ArrayList<>();
		for (User u : mList) {
			users.add(this.toViewModel(u));
		}
		
		return users;
	}

}
