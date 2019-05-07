import { Component, OnInit, Input } from '@angular/core';
import { HttpClientService, Employee } from '../service/http-client.service';
import { EmployeeComponent } from '../employee/employee.component';
import { refreshDescendantViews } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
 
  @Input() selectedEmployeeId: string;
  @Input() selectedEmployeeName: string;
  @Input() selectedEmployeeDes: string;
  @Input() selectedEmployeeSal: string;

  user: Employee = new Employee("","","","");
 
  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
    this.user.name = this.selectedEmployeeName;
    this.user.designation = this.selectedEmployeeDes;
    this.user.salary = this.selectedEmployeeSal;
  }

  updateEmployee(): void {
    this.user.empId = this.selectedEmployeeId;

    this.httpClientService.updateEmployee(this.user).subscribe( data => {
          window.location.reload();
        });

  };

}
