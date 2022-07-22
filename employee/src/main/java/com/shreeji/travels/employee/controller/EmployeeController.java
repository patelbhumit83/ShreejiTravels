package com.shreeji.travels.employee.controller;

import com.shreeji.travels.employee.exception.ResourceNotFound;
import com.shreeji.travels.employee.model.Employee;
import com.shreeji.travels.employee.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    @CrossOrigin
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id ) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Employee Not Exist with id :- " + id ));
        return ResponseEntity.ok(employee);
    }

    //update Employee Rest API
    @PutMapping("/employees/{id}")
    @CrossOrigin
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetail) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Employee Not Exist with id :- " + id ));

        employee.setFirstName(employeeDetail.getFirstName());
        employee.setLastName(employeeDetail.getLastName());
        employee.setEmailId(employeeDetail.getEmailId());
        Employee updatedEmployee = employeeRepository.save(employee);

        return ResponseEntity.ok(updatedEmployee);
    }

    //delete Employee Rest API
    @DeleteMapping("employees/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Employee Not Exist with id :- " + id ));
        employeeRepository.delete(employee);
        Map<String, Boolean> map = new HashMap<>();
        map.put("deleted", true);
        return ResponseEntity.ok(map);
    }
}
