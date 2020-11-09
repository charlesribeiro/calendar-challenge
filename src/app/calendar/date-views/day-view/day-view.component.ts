import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { Observable } from 'rxjs';
import { addReminder, removeAllRemindersFromDay } from 'src/app/state/reminder.actions';
import { Utils } from 'src/app/utils';
import { WeatherServiceService } from 'src/core/services/weather-service.service';
import { Reminder, State } from '../../../shared/models/reminder';
import * as myActions from '../../../state/reminder.selector';
import { MatDialog } from "@angular/material/dialog";
import { ReminderDialogComponent } from '../../reminder-dialog/reminder-dialog.component';


@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.css']
})
export class DayViewComponent implements OnInit {

  @Input() isWeekend: boolean;
  @Input() date: DateTime;

  remindersForThisDate$: Observable<Reminder[]>;
  texto$: Observable<String>;

  year$: Observable<any>;

  constructor(private store: Store<State>, private weatherService: WeatherServiceService, public dialog: MatDialog,
  ) {
    this.texto$ = this.store.pipe(select(myActions.getText));
    // this.remindersForThisDate$ = this.store.pipe(select(myActions.getRemindersOnDate(this.date)));
    this.remindersForThisDate$ = this.store.pipe(select(myActions.getRemindersOnDate, { date: this.date }));

  }

  ngOnInit(): void {
    console.log("date", this.date);
    this.remindersForThisDate$ = this.store.pipe(select(myActions.getRemindersOnDate, { date: this.date }));

  }

  ngOnChanges(): void {
    // console.log("date", this.date);
    this.remindersForThisDate$ = this.store.pipe(select(myActions.getRemindersOnDate, { date: this.date }));

  }

  newReminder() {
    console.log("new reminder", this.date);
   
    const dialog = this.dialog.open(ReminderDialogComponent, {
      data: {

        date: this.date,
        city: "",
        reminderText: "",

      },
      maxWidth: 800,
    });

    dialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // this.retrieveForecastForGivenDay("Boston", this.date);

    });
   
   

  }

  retrieveForecastForGivenDay(city: String, date: DateTime) {

    let validForecasts;

    console.warn(Utils.isWeatherForecastAvailable(date));
    if (Utils.isWeatherForecastAvailable(date)) {
      this.weatherService.retrieveForecastForFiveDays(city).subscribe(res => {
        // res.list.forEach(weatherInfo => {
        //   console.log(weatherInfo.weather[0], +weatherInfo.dt * 1000, date);
        // });

        validForecasts = res.list.filter(weatherInfo => {
          // console.log(weatherInfo.dt * 1000, date);
          return Math.abs(+weatherInfo.dt * 1000 - date.toMillis()) <= 3600000 * 3;
        })

        console.warn(validForecasts);
        console.log(validForecasts[0].weather[0].main);


        let rem: Reminder = {
          reminderText: "Text", date: this.date,
          city, id: Utils.generateUniqueIdForReminder(), weatherText: validForecasts[0].weather[0].main
        };


        this.store.dispatch(addReminder({ reminder: rem }));

        return validForecasts[0].weather[0].main;


      },
        error => { console.error(error); return ""; }
      );
    }
    else {

      let rem: Reminder = {
        reminderText: "Text", date: this.date,
        city, id: Utils.generateUniqueIdForReminder(), weatherText: "--"
      };


      this.store.dispatch(addReminder({ reminder: rem }));
      return "not available"
    }


  }

  deleteAllRemindersFromDay(){
    this.store.dispatch(removeAllRemindersFromDay({ date: this.date }));

  }

}
