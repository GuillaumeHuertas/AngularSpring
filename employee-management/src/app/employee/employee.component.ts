import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClientService, Employee } from '../service/http-client.service';
import { MatDialogModule, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { FileNameDialogComponent } from '../file-name-dialog/file-name-dialog.component';

@NgModule({
  imports: [
    MatDialogModule
  ]
})

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];

  static fileNameDialogRef: MatDialogRef<FileNameDialogComponent>;

  constructor(
    private httpClientService: HttpClientService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
      response => { this.employees = response; }
    );
  }

  openUpdateDialog(id: string, name: string, desigation: string, salary: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.data = {
      nameParam: name,
      idParam: id,
      designationParam: desigation,
      salaryParam: salary
    };
    if (EmployeeComponent.fileNameDialogRef == null) {
      EmployeeComponent.fileNameDialogRef = this.dialog.open(FileNameDialogComponent, dialogConfig);
    }
  }

  deleteEmployee(employee: Employee): void {
    this.httpClientService.deleteEmployee(employee)
      .subscribe(data => {
        this.employees = this.employees.filter(u => u !== employee);
      })
  };
}