import { Component, Inject, OnInit } from '@angular/core';
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


  ngOnInit(): void {

    this.date = this.dataChart.date;


  }

  ngOnDestroy(): void {
    debugger;
    console.log(document.querySelector("#myColorPicker"));
    // this.color = 
    this.dialogRef.close({ data: 'you confirmed' })
  }

}
