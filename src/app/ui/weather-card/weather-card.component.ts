import { Component, Input } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-weather-card',
    templateUrl: './weather-card.component.html',
    styleUrls: ['./weather-card.component.scss']
})

export class WeatherCardComponent {

    darkMode: boolean;
    state: string;
    condition: string;
    temp: number;
    maxTemp: number;
    minTemp: number;
    errorMessage: string;
    cityName: string;

    @Input() 
    set city(city: string) {
        this.cityName = city;
        this.weather.getWeather(city)
            .pipe(first())
            .subscribe(payload => {
                this.state = payload.weather[0].main;
                this.condition = this.translateIntoUkr(payload.weather[0].main);
                this.temp = Math.round(payload.main.temp);
            }, err => this.errorMessage = err.error.message );

        this.weather.getForecast(city)
            .pipe(first())
            .subscribe(payload => {
                this.maxTemp = Math.round(payload[0].main.temp);
                this.minTemp = Math.round(payload[0].main.temp);

                for (const res of payload) {
                    if (new Date().toLocaleDateString('en-GB') === new Date(res.dt_txt).toLocaleDateString('en-GB')) {
                        this.maxTemp = res.main.temp > this.maxTemp ? Math.round(res.main.temp) : this.maxTemp;
                        this.minTemp = res.main.temp < this.minTemp ? Math.round(res.main.temp) : this.minTemp;
                    }
                }
            }, err => this.errorMessage = err.error.message );
    }

    @Input() 
    set mode(mode: boolean) {
        this.darkMode = mode;
    }

    constructor(public weather: WeatherService) {
    }

    translateIntoUkr(state: string) {
        if (state === 'Sunny' || state === 'Clear') {
            return 'Сонячно';
        } else if (state === 'Clouds') {
            return 'Хмарно';
        } else if (state === 'Rain' || state === 'Drizzle' || state === 'Mist') {
            return 'Опади';
        } else if (state === 'Haze' || state === 'Fog') {
            return 'Туман';
        } else if (state === 'Storm' || state === 'Thunderstorm') {
            return 'Шторм';
        }
    }
}