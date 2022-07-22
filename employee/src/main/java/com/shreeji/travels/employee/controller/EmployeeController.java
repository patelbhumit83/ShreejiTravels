package com.shreeji.travels.employee.controller;

import com.shreeji.travels.employee.exception.ResourceNotFound;
import com.shreeji.travels.employee.model.Employee;
import com.shreeji.travels.employee.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    //GET all EMPLOYEE
    @GetMapping("/employees")
    @CrossOrigin
    public List<Employee> getAllEmployee() {
        return employeeRepository.findAll();
    }

    //Create Employee Rest endpoint
    @PostMapping("/employees")
    @CrossOrigin
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    // get Employee by Id rest api
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id ) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Employee Not Exist with id :- " + id ));
        return ResponseEntity.ok(employee);
    }
}
