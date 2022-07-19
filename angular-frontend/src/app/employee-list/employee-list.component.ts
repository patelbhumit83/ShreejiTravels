import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor() { }

  ngOnInit(): void {
    this.employees = [{
      "id":1,
      "firstName":"Bhumit",
      "lastName":"Patel",
      "email":"bhumit.patel@email.com"
    },
    {
      "id":2,
      "firstName":"Kunj",
      "lastName":"Patel",
      "email":"kunj.patel@email.com"
    },
    {
      "id":3,
      "firstName":"Zeel",
      "lastName":"Patel",
      "email":"zeel.patel@email.com"
    }]

  }

}
