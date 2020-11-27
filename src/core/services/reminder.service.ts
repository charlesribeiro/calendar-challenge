import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { Reminder, State } from '../../app/shared/models/reminder';
import { Utils } from '../../app/utils';
import { WeatherService } from './weather.service';
import { Store } from '@ngrx/store';
import { addReminder, editReminder } from '../../app/state/reminder.actions';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  constructor(public weatherService: WeatherService, private store: Store<State>) { }

  retrieveForecastForGivenDay(city: string, reminderText: string, date: DateTime, color: string, idOfReminderToEdit?: number): void {

    let validForecasts;

    if (Utils.isWeatherForecastAvailable(date)) {
      this.weatherService.retrieveForecastForFiveDays(city).subscribe(res => {

        validForecasts = res.list.filter(weatherInfo => {
          return Math.abs(+weatherInfo.dt * 1000 - date.toMillis()) > 0;
        });

        if (idOfReminderToEdit) {
          this.editExistingReminder(reminderText, date, city, idOfReminderToEdit, color,
            validForecasts[0].weather[0].main, validForecasts[0].weather[0].icon);
        }

        else {
          this.addNewReminder(reminderText, date, city, color,
            validForecasts[0].weather[0].main, validForecasts[0].weather[0].icon);
        }

      },
        error => ''
      );
    }
    else {

      if (idOfReminderToEdit) {
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

    this.store.dispatch(addReminder({ reminder: rem }));
  }

  editExistingReminder(reminderText: string, date: DateTime, city: string, id: number, color: string,
                       weatherText: string = '', weatherIcon: string = ''): void {

    const rem: Reminder = {
      reminderText, date,
      city, id, weatherText, color, weatherIcon
    };

    this.store.dispatch(editReminder({ reminder: rem }));
  }
}
