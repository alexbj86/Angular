package net.davismol.springangulardemo.models;

import org.springframework.data.mongodb.core.mapping.Document;

import groovy.transform.EqualsAndHashCode;
import lombok.Data;

@Data
@EqualsAndHashCode (callSuper = true)
@Document(collection="users")
public class User extends ABaseModel {

	private static final long serialVersionUID = 8257990548675453920L;
	
	private String firstname;
	private String lastname;
	private String country;
	private int age;
	
	
}
