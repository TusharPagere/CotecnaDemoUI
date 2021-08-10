import { ElementRef, ViewChild } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { delay, map, startWith } from 'rxjs/operators';
import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-app-edit-request',
  templateUrl: './app-edit-request.component.html',
  styleUrls: ['./app-edit-request.component.css']
})
export class AppEditRequestComponent implements OnInit {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<AppEditRequestComponent>, private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) { name, date, status }) {
      this.form = fb.group({

      });
    }
  

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
