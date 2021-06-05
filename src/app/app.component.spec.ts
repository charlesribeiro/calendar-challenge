import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { initialState } from 'src/app/state/reminder.reducer';
import { State } from 'src/app/shared/models/reminder';
import { AppModule } from './app.module';

describe('AppComponent', () => {

  let store: MockStore<State>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppModule,
      ],
      declarations: [
        AppComponent,
        CalendarComponent,
      ],
      providers: [
        provideMockStore({ initialState }),
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'calendar-challenge'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('calendar-challenge');
  });
});
