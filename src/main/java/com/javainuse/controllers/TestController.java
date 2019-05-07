package com.javainuse.controllers;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javainuse.model.Employee;
import com.javainuse.repository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping({ "/employees" })
public class TestController {
	
	@Autowired
	private EmployeeRepository employeeRepository;

	private List<Employee> employees = new ArrayList<Employee>();

	@GetMapping(produces = "application/json")
	public List<Employee> firstPage() {
		employees = employeeRepository.findAll();
		return employees;
	}

	@DeleteMapping(path = { "/{id}" })
	public void delete(@PathVariable("id") Long id) {
		employeeRepository.deleteById(id);
	}

	@PutMapping
	public void update(@RequestBody Employee user) {
		employeeRepository.save(user);
	}
	
	@PostMapping
	public Employee create(@RequestBody Employee user) {
		employeeRepository.save(user);
		return user;
	}

}