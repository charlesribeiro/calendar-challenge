import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { DayViewComponent } from '../day-view/day-view.component';

import { WeekViewComponent } from './week-view.component';

describe('WeekViewComponent', () => {
  let component: WeekViewComponent;
  let fixture: ComponentFixture<WeekViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ WeekViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
