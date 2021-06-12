import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MOCKFORECASTS } from '../utils/mockForecasts';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let weatherService: WeatherService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        WeatherService
      ]
    }); 
    
    weatherService = TestBed.inject(WeatherService);

    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should retrieve forecast for five days', () => {

    weatherService.retrieveForecastForFiveDays("mockCity")
        .subscribe(forecasts => {

            expect(forecasts).toBeTruthy('No forecasts returned');
            console.log(forecasts);

            expect(forecasts.list.length).toBe(1,
                "incorrect number of forecasts");

        });

    const req = httpTestingController.expectOne(weatherService.getUrlForFiveDayForecast("mockCity"));

    expect(req.request.method).toEqual("GET");

    req.flush({ payload: Object.values(MOCKFORECASTS) });

});

});
