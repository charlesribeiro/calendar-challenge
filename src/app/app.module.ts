import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MonthViewComponent } from './calendar/date-views/month-view/month-view.component';
import { WeekViewComponent } from './calendar/date-views/week-view/week-view.component';
import { DayViewComponent } from './calendar/date-views/day-view/day-view.component';
import { WeekdayHeaderComponent } from './calendar/date-views/weekday-header/weekday-header.component';
import { ReminderComponent } from './calendar/reminder/reminder.component'

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';


import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    MonthViewComponent,
    WeekViewComponent,
    DayViewComponent,
    WeekdayHeaderComponent,
    ReminderComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer }), 
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
