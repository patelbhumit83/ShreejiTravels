import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
import { EmployeeService} from '../employee.service'
import { Router} from '@angular/router'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService : EmployeeService, private router : Router) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  private getEmployee(){
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees=data;
    })
  }

  updateEmployee(id : Number) {
    this.router.navigate(['update-employee',id])
  }

}
