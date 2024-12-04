import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Parts } from './model/parts.model';

@Injectable({
  providedIn: 'root'
})
export class PartsService {

  constructor(private http: HttpClient) { }

  public getParts() {
    return this.http.get<Parts[]>('http://localhost:3000/parts');
  }
}
