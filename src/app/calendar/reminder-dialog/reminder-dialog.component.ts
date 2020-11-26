import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DateTime } from 'luxon';
import { ReminderService } from '../../../core/services/reminder.service';

@Component({
  selector: 'app-reminder-dialog',
  templateUrl: './reminder-dialog.component.html',
  styleUrls: ['./reminder-dialog.component.css']
})
export class ReminderDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ReminderDialogComponent>,
    public reminderService: ReminderService,
    @Inject(MAT_DIALOG_DATA) public dataForDialog: any


  ) { }
  @ViewChild('picker') picker: any;

  date: DateTime;
  color: String;
  city: String;

  public dateControl = new FormControl(new Date(2021, 9, 4, 5, 6, 7));
  public dateControlMinMax = new FormControl(new Date());
  public cityControl = new FormControl();
  public reminderControl = new FormControl();

  ngOnInit(): void {

    this.date = this.dataForDialog.date;

    this.dateControl.setValue(this.date.toBSON());
    this.cityControl.setValue(this.dataForDialog.city);
    this.reminderControl.setValue(this.dataForDialog.reminderText);

  }

  ngOnChanges(): void {

    this.date = this.dataForDialog.date;

    this.dateControl.setValue(this.date.toBSON());
    this.cityControl.setValue(this.dataForDialog.city);
    this.reminderControl.setValue(this.dataForDialog.reminderText);

  }

  confirm() {
    const newDate = DateTime.fromJSDate(new Date(this.dateControl.value));
    console.log(newDate);
    // console.log(DateTime.fromJSDate(newDate));

    const colorSpinnerDiv: any = document.getElementById('reminderColor');

    const selectedColor = colorSpinnerDiv.value;
    // debugger;



    if (this.dataForDialog.reminderId) {
      // debugger;
      this.reminderService.retrieveForecastForGivenDay(this.cityControl.value, this.reminderControl.value, newDate, selectedColor, this.dataForDialog.reminderId);
    }

    else {
      // debugger;
      this.reminderService.retrieveForecastForGivenDay(this.cityControl.value, this.reminderControl.value, newDate, selectedColor);
    }

  }

  ngOnDestroy(): void {
    this.picker.cancel();
    this.dialogRef.close({ data: 'you data' });
  }

}
