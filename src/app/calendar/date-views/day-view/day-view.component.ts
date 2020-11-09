import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { Observable } from 'rxjs';
import { addReminder } from 'src/app/state/reminder.actions';
import { Utils } from 'src/app/utils';
import { WeatherServiceService } from 'src/core/services/weather-service.service';
import { Reminder, State } from '../../../shared/models/reminder';
import * as myActions from '../../../state/reminder.selector'

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.css']
})
export class DayViewComponent implements OnInit {

  @Input() isWeekend: boolean;
  @Input() date: DateTime;

  reminders$: Observable<Reminder[]>;
  texto$: Observable<String>;

  year$: Observable<any>;

  constructor(private store: Store<State>, private weatherService: WeatherServiceService) {
    this.texto$ = this.store.pipe(select(myActions.getText));
    // this.reminders$ = this.store.pipe(select(myActions.getRemindersOnDate(this.date)));
    this.reminders$ = this.store.pipe(select(myActions.getRemindersOnDate, { date: this.date }));

  }

  ngOnInit(): void {
    console.log("date", this.date);
    this.reminders$ = this.store.pipe(select(myActions.getRemindersOnDate, { date: this.date }));

  }

  ngOnChanges(): void {
    console.log("date", this.date);
    this.reminders$ = this.store.pipe(select(myActions.getRemindersOnDate, { date: this.date }));

  }

  newReminder() {
    console.log("new reminder", this.date);
    this.retrieveForecastForGivenDay("Boston", this.date);

  }

  retrieveForecastForGivenDay(city: String, date: DateTime) {

    let validForecasts;

    console.warn(Utils.isWeatherForecastAvailable(date));
    if (Utils.isWeatherForecastAvailable(date)) {
      this.weatherService.retrieveForecastForFiveDays(city).subscribe(res => {
        res.list.forEach(weatherInfo => {
          console.log(weatherInfo.weather[0], +weatherInfo.dt * 1000, date);
        });



        validForecasts = res.list.filter(weatherInfo => {
          console.log(weatherInfo.dt * 1000, date);
          return Math.abs(+weatherInfo.dt * 1000 - date.ts) <= 3600000 * 3;
        })

        console.warn(validForecasts);
        console.log(validForecasts[0].weather[0].main);

        
        let rem: Reminder = {
          reminderText: "Text", date: this.date,
          city, id: 2, weatherText: validForecasts[0].weather[0].main
        };
    

        this.store.dispatch(addReminder({ reminder: rem }));
        console.log("Reminder", this.reminders$)

        return validForecasts[0].weather[0].main;


      },
        error => { console.error(error); return ""; }
      );
    }
    else {
      return "not available"
    }


  }

}
