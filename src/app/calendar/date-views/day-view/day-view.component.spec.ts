import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { DayViewComponent } from './day-view.component';
import { initialState } from 'src/app/state/reminder.reducer';
import { WeatherService } from 'src/core/services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { DateTime } from 'luxon';
import { Utils } from 'src/app/utils';
import { State } from 'src/app/shared/models/reminder';


describe('DayViewComponent', () => {
  let component: DayViewComponent;
  let fixture: ComponentFixture<DayViewComponent>;

  let store: MockStore<State>;
  let date: DateTime;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, MatDialogModule ],
      declarations: [ DayViewComponent ],
      providers: [
        provideMockStore({ initialState }),
        WeatherService,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.inject(MockStore);

    date = Utils.getDayToDisplayOnCalendarCell(0, 0, 0);

    component.date = date;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
