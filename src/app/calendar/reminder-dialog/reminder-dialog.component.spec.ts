import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { DateTime } from 'luxon';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { ReminderDialogComponent } from './reminder-dialog.component';
import { initialState } from 'src/app/state/reminder.reducer';

describe('ReminderDialogComponent', () => {
  let component: ReminderDialogComponent;
  let fixture: ComponentFixture<ReminderDialogComponent>;

  let store: MockStore<any>;

  let submitButton;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        MatDialogModule,
        FormsModule,
        MatInputModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        NgxMaterialTimepickerModule,
        NgxMatTimepickerModule,
        NgxMatDatetimePickerModule,
        NgxMatNativeDateModule,
        MatDatepickerModule,
        MatNativeDateModule,
      ],
      declarations: [ReminderDialogComponent],
      providers: [
        provideMockStore(
          { initialState }),
        {
          provide: MAT_DIALOG_DATA, useValue: {

            date: DateTime.local(),
            city: 'Lima',
            reminderText: 'Reminder',

          },
        },
        { provide: MatDialogRef, useValue: {} },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderDialogComponent);
    component = fixture.componentInstance;

    store = TestBed.inject(MockStore);
    fixture.detectChanges();

    submitButton = fixture.debugElement.query(By.css('button'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be populated with right content', () => {

    expect(component.date).toBeInstanceOf(DateTime);
    expect(component.dataForDialog.reminderText).toBe('Reminder');
    expect(component.dataForDialog.city).toBe('Lima');

  });

  // it('should have OK button enabled once the data is populated', () => {

  //   expect(submitButton.nativeElement.enabled).toBeTruthy();
  // });
});
