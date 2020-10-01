import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('https://compras-c1b0a.firebaseio.com/cool-cars.json');
  }


}
