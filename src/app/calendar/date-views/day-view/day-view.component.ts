import { Component, Input, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DateTime } from 'luxon';

import { addReminder, removeAllRemindersFromDay } from '../../../state/reminder.actions';
import { Utils } from '../../../utils';
import { WeatherService } from '../../../../core/services/weather.service';
import { Reminder, State } from '../../../shared/models/reminder';
import { ReminderDialogComponent } from '../../reminder-dialog/reminder-dialog.component';
import * as myActions from '../../../state/reminder.selector';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.css']
})
export class DayViewComponent implements OnChanges {

  @Input() isWeekend: boolean;
  @Input() date: DateTime;

  remindersForThisDate$: Observable<Reminder[]>;
  texto$: Observable<string>;

  isCurrentMonth: boolean;

  year$: Observable<any>;

  constructor(private store: Store<State>, private weatherService: WeatherService, public dialog: MatDialog,
  ) {
    this.texto$ = this.store.pipe(select(myActions.getText));
    this.remindersForThisDate$ = this.store.pipe(select(myActions.getRemindersOnDate, { date: this.date }));

  }

  ngOnChanges(): void {
    this.isCurrentMonth = this.date?.month === DateTime.local().month && this.date?.year === DateTime.local().year;
    this.remindersForThisDate$ = this.store.pipe(select(myActions.getRemindersOnDate, { date: this.date }));

  }

  newReminder(): void {

    this.dialog.open(ReminderDialogComponent, {
      data: {

        date: this.date,
        city: '',
        reminderText: '',

      },
      maxWidth: 800,
    });

  }

  retrieveForecastForGivenDay(city: string, date: DateTime): string {

    let validForecasts;

    if (Utils.isWeatherForecastAvailable(date)) {
      this.weatherService.retrieveForecastForFiveDays(city).subscribe(res => {

        validForecasts = res.list.filter(weatherInfo => {
          return Math.abs(+weatherInfo.dt * 1000 - date.toMillis()) <= 3600000 * 3; // returns the forecasts of 3 days
        });

        const rem: Reminder = {
          reminderText: 'Text', date: this.date,
          city, id: Utils.generateUniqueIdForReminder(), weatherText: validForecasts[0].weather[0].main
        };

        this.store.dispatch(addReminder({ reminder: rem }));

        return validForecasts[0].weather[0].main;

      },
        error => ''
      );
    }
    else {

      const rem: Reminder = {
        reminderText: 'Text', date: this.date,
        city, id: Utils.generateUniqueIdForReminder(), weatherText: '--'
      };

      this.store.dispatch(addReminder({ reminder: rem }));
      return 'not available';
    }
  }

  deleteAllRemindersFromDay(): void {
    this.store.dispatch(removeAllRemindersFromDay({ date: this.date }));
  }

}
