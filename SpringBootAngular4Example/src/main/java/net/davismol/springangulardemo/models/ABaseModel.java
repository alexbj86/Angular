package net.davismol.springangulardemo.models;

import java.io.Serializable;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public abstract class ABaseModel implements Serializable {
	 
	private static final long serialVersionUID = -7713344605964371198L;
	
	@Id
	protected String id;
	
}
