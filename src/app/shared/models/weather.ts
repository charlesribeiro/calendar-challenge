export interface WeatherInfo{
    city: any[];
    cnt: number;
    code: string;
    list: SingleForecastInfo[];
    message: any;
}

export interface SingleForecastInfo{
    clouds: any;
    dt: number;
    dt_txt: string;
    main: MainWeatherInfo[];
    pop: any;
    sys: any;
    visibility: number;
    weather: WeatherDescription[];
    wind: any;
}

export interface MainWeatherInfo{
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
}

export interface WeatherDescription{
    description: string;
    icon: string;
    id: number;
    main: string;
}
