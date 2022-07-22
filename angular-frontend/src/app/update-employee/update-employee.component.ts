import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
import { EmployeeService} from '../employee.service'
import { ActivatedRoute } from '@angular/router'
import { Router} from '@angular/router'

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee : Employee = new Employee();
  id : Number;
  constructor(private employeeService : EmployeeService, private activatedRoute : ActivatedRoute,
  private router : Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.employeeService.getEmployeeByID(this.id).subscribe(data => {
      this.employee=data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data => {
      console.log(data);
      this.goToEmoployeeList();
    },
    error => console.log(error));
  }

  goToEmoployeeList(){
    this.router.navigate(['/employees']);
  }

}
