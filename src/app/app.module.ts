import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MonthViewComponent } from './calendar/date-views/month-view/month-view.component';
import { WeekViewComponent } from './calendar/date-views/week-view/week-view.component';
import { DayViewComponent } from './calendar/date-views/day-view/day-view.component';
import { WeekdayHeaderComponent } from './calendar/date-views/weekday-header/weekday-header.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    MonthViewComponent,
    WeekViewComponent,
    DayViewComponent,
    WeekdayHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
