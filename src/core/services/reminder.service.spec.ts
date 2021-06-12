import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { State } from 'src/app/shared/models/reminder';
import { ReminderService } from './reminder.service';
import { initialState } from 'src/app/state/reminder.reducer';

describe('ReminderService', () => {
  let reminderService: ReminderService;
  let httpTestingController: HttpTestingController;

  let store: MockStore<State>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        provideMockStore({ initialState }),
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    reminderService = TestBed.inject(ReminderService);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(reminderService).toBeTruthy();
  });
});
