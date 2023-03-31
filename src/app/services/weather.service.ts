import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { WeatherData } from '../model/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private url = environment.weatherApiUrl;

  private headers = new HttpHeaders()
    .set('X-RapidAPI-Key', environment.weatherApiKey)
    .set('X-RapidAPI-Host', environment.weatherApiHost);

  private params = new HttpParams().set('unitGroup', 'metric');

  constructor(private httpClient: HttpClient) {}

  getWeatherData(city: string): Observable<WeatherData> {
    return this.httpClient.get<WeatherData>(this.url + city, {
      headers: this.headers,
      params: this.params,
    });
  }
}
