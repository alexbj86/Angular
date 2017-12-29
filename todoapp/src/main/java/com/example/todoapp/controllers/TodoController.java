package com.example.todoapp.controllers;


import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.todoapp.models.Todo;
import com.example.todoapp.service.TodoService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class TodoController {

	private @Autowired TodoService todoService;
	
	@GetMapping("/todos")
	public List<Todo> getAllTodos(){
		return todoService.getAllTodos();
	}
	
	@PostMapping("/todos")
	public Todo createTodo(@Valid @RequestBody Todo todo) {
		return todoService.createTodo(todo);
	}
	
	@GetMapping(value = "/todos/{id}")
	public ResponseEntity<Todo> getTodoById(@PathVariable("id") String id){
		Todo todoById = todoService.getTodoById(id);
		if( todoById == null)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		
		return new ResponseEntity<>(todoById, HttpStatus.OK);
		
	}
	
	@PutMapping(value = "/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable("id") String id,
										   @Valid @RequestBody Todo todo){
		Todo todoData = todoService.updateTodo(id, todo);
		if(todoData == null)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		
		return new ResponseEntity<>(todoData, HttpStatus.OK);
	}
	
	@DeleteMapping(value = "/todos/{id}")
	public void deleteTodo(@PathVariable("id") String id) {
		todoService.deleteTodo(id);
	}
	
}
