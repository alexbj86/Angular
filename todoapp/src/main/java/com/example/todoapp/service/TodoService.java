package com.example.todoapp.service;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.todoapp.models.Todo;
import com.example.todoapp.repositories.TodoRepository;

@Service
public class TodoService {

	private @Autowired TodoRepository todoRepository;
	
	/**
	 * 
	 * @return List<Todo> 
	 */
	public List<Todo> getAllTodos(){
		Sort sortByCreatedAtDesc = new Sort(Sort.Direction.DESC, "createdAt");
		return todoRepository.findAll(sortByCreatedAtDesc);
	}
	
	/**
	 * 
	 * @param todo
	 * @return Todo
	 */
	public Todo createTodo(Todo todo) {
		todo.setCompleted(true);
		return todoRepository.save(todo);
	}
	
	/**
	 * 
	 * @param id
	 * @return Todo
	 */
	public Todo getTodoById(String id) {
		return todoRepository.findOne(id);
	}
	
	/**
	 * 
	 * @param id
	 * @param todo
	 * @return Todo
	 */
	public Todo updateTodo(String id, Todo todo) {
		
		Todo todoData = todoRepository.findOne(id);
		if(todoData == null)
			return null;
		
		todoData.setTitle(todo.getTitle());
		todoData.setCompleted(todo.getCompleted());
		return todoRepository.save(todoData);
	}
	
	/**
	 * 
	 * @param id
	 */
	public void deleteTodo(String id) {
		todoRepository.delete(id);
	}
}