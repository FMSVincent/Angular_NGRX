import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aircraft } from '../model/aircraft.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AicraftsApiService {
  constructor(private http: HttpClient) { }

  public getAicrafts() {
    return this.http.get<Aircraft[]>('http://localhost:3000/aircrafts');
  }

  public getAircraftById(id: number) {
    return this.http.get<Aircraft>(`http://localhost:3000/aircrafts/${id}`);
  }

  public getDesignAircrafts(): Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(environment.host + "/aircrafts?design=true");
  }
  public getDevelopmentAircrafts(): Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(environment.host + "/aircrafts?development=true");
  }
}
