package net.davismol.springangulardemo.viewmodels;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserViewModel {

	private String firstname;
	private String lastname;
	private String country;
	private int age;
	
	
}
