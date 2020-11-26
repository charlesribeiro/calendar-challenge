import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { Reminder, State } from '../../app/shared/models/reminder';
import { Utils } from '../../app/utils';
import { WeatherService } from './weather.service';
import { select, Store } from '@ngrx/store';
import { addReminder, editReminder } from '../../app/state/reminder.actions';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  constructor(public weatherService: WeatherService, private store: Store<State>) { }

  retrieveForecastForGivenDay(city: string, reminderText: string, date: DateTime, color: string, idOfReminderToEdit?: number): void {
    // debugger;

    let validForecasts;

    // console.warn(Utils.isWeatherForecastAvailable(date));
    if (Utils.isWeatherForecastAvailable(date)) {
      this.weatherService.retrieveForecastForFiveDays(city).subscribe(res => {
        // res.list.forEach(weatherInfo => {
        // console.log(weatherInfo.weather[0], +weatherInfo.dt * 1000, date);
        // });

        validForecasts = res.list.filter(weatherInfo => {
          // console.log(weatherInfo.dt * 1000, date);
          return Math.abs(+weatherInfo.dt * 1000 - date.toMillis()) > 0;
        });

        // console.warn("valid forecast", validForecasts)

        if (idOfReminderToEdit) {
          // debugger;
          this.editExistingReminder(reminderText, date, city, idOfReminderToEdit, color,
            validForecasts[0].weather[0].main, validForecasts[0].weather[0].icon);

        }

        else {
          this.addNewReminder(reminderText, date, city, color,
            validForecasts[0].weather[0].main, validForecasts[0].weather[0].icon);

        }

      },
        error => { console.error(error); return ''; }
      );
    }
    else {

      if (idOfReminderToEdit) {
        // debugger;
        this.editExistingReminder(reminderText, date, city, idOfReminderToEdit, color);

      }

      else {
        this.addNewReminder(reminderText, date, city, color);

      }

    }

  }

  addNewReminder(reminderText: string, date: DateTime, city: string, color: string,
                 weatherText: string = '', weatherIcon: string = ''): void {

    const rem: Reminder = {
      reminderText, date,
      city, id: Utils.generateUniqueIdForReminder(), weatherText, color, weatherIcon
    };

    // debugger;

    this.store.dispatch(addReminder({ reminder: rem }));
  }

  editExistingReminder(reminderText: string, date: DateTime, city: string, id: number, color: string,
                       weatherText: string = '', weatherIcon: string = ''): void {

    const rem: Reminder = {
      reminderText, date,
      city, id, weatherText, color, weatherIcon
    };

    // debugger;

    this.store.dispatch(editReminder({ reminder: rem }));
  }
}
