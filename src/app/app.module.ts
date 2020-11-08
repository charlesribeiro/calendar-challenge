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
import { reminderReducer } from './state/reminder.reducer';


import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment
import { EffectsModule } from '@ngrx/effects';
import { ReminderEffects } from './state/reminder.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
    StoreModule.forRoot({ reminderContext: reminderReducer }), 
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([ReminderEffects]),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
