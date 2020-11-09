import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-reminder-dialog',
  templateUrl: './reminder-dialog.component.html',
  styleUrls: ['./reminder-dialog.component.css']
})
export class ReminderDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ReminderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dataChart: any

  ) { }

  date: DateTime;
  color: String;
  city: String;

  public dateControl = new FormControl(new Date(2021, 9, 4, 5, 6, 7));
  public dateControlMinMax = new FormControl(new Date());


  ngOnInit(): void {

    this.date = this.dataChart.date;

    this.dateControl.setValue(this.date.toBSON());


  }

  ngOnDestroy(): void {
    debugger;
    console.log(document.querySelector("#myColorPicker"));
    // this.color = 
    this.dialogRef.close({ data: 'you confirmed' })
  }

}
