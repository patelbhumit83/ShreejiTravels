import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
import { EmployeeService} from '../employee.service'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    // this.employees = [{
    //   "id":1,
    //   "firstName":"Bhumit",
    //   "lastName":"Patel",
    //   "email":"bhumit.patel@email.com"
    // },
    // {
    //   "id":2,
    //   "firstName":"Kunj",
    //   "lastName":"Patel",
    //   "email":"kunj.patel@email.com"
    // },
    // {
    //   "id":3,
    //   "firstName":"Zeel",
    //   "lastName":"Patel",
    //   "email":"zeel.patel@email.com"
    // }]

    this.getEmployee();

  }

  private getEmployee(){
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees=data;
    })
  }

}
