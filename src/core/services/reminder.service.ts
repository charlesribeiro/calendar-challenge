import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { Reminder, State } from 'src/app/shared/models/reminder';
import { Utils } from 'src/app/utils';
import { WeatherServiceService } from './weather-service.service';
import { select, Store } from '@ngrx/store';
import { addReminder, editReminder } from 'src/app/state/reminder.actions';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  constructor(public weatherService: WeatherServiceService, private store: Store<State>) { }

  retrieveForecastForGivenDay(city: String, reminderText: String, date: DateTime, idOfReminderToEdit?: number) {
    debugger;

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

        if(idOfReminderToEdit){
          debugger;
          this.editExistingReminder(reminderText, date, city, idOfReminderToEdit, validForecasts[0].weather[0].main);

        }

        else{
          this.addNewReminder(reminderText, date, city, validForecasts[0].weather[0].main);

        }




      },
        error => { console.error(error); return ""; }
      );
    }
    else {

      if(idOfReminderToEdit){
        debugger;
        this.editExistingReminder(reminderText, date, city, idOfReminderToEdit);

      }

      else{
        this.addNewReminder(reminderText, date, city);

      }


    }

  }

  addNewReminder(reminderText: String, date: DateTime, city: String, forecastText: String = "") {


    let rem: Reminder = {
      reminderText: reminderText, date: date,
      city, id: Utils.generateUniqueIdForReminder(), weatherText: forecastText
    };

    debugger;


    this.store.dispatch(addReminder({ reminder: rem }));
  }

  editExistingReminder(reminderText: String, date: DateTime, city: String, id: number, forecastText: String = "") { 

    let rem: Reminder = {
      reminderText: reminderText, date: date,
      city, id, weatherText: forecastText
    };

    debugger;


    this.store.dispatch(editReminder({ reminder: rem }));
  }
}
