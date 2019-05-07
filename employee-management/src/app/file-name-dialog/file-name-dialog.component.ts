import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmployeeComponent } from '../employee/employee.component';
import { trigger, transition, style, animate} from '@angular/animations';

@Component({
  selector: 'app-file-name-dialog',
  templateUrl: './file-name-dialog.component.html',
  styleUrls: ['./file-name-dialog.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class FileNameDialogComponent{
  id:string;
  name: string;
  designation: string;
  salary: string;

  constructor(private dialogRef: MatDialogRef<FileNameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.name = data.nameParam;
    this.id = data.idParam;
    this.designation = data.designationParam;
    this.salary = data.salaryParam;
}

  onNoClick(): void {
    EmployeeComponent.fileNameDialogRef.close();
    EmployeeComponent.fileNameDialogRef=null;
  }
}
