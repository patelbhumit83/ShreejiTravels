import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
import { EmployeeService} from '../employee.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee : Employee = new Employee();
  id : Number;
  constructor(private employeeService : EmployeeService, private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.employeeService.getEmployeeByID(this.id).subscribe(data => {

      this.employee=data;
    }, error => console.log(error));
  }

  onSubmit() {}

}
