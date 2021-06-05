import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeekViewComponent } from '../week-view/week-view.component';

import { MonthViewComponent } from './month-view.component';

describe('MonthViewComponent', () => {
  let component: MonthViewComponent;
  let fixture: ComponentFixture<MonthViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthViewComponent, WeekViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
