import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
import { ActivatedRoute } from '@angular/router'
import { EmployeeService} from '../employee.service'

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id : Number;
  employee : Employee
  constructor(private activatedRoute: ActivatedRoute, private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.employee = new Employee();
    this.employeeService.getEmployeeByID(this.id).subscribe(data => {
      this.employee = data;
    })
  }

}
