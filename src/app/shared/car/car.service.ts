import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  public API = 'https://compras-c1b0a.firebaseio.com';
  public CAR_API = this.API + '/cool-cars';
  public JSON = '.json';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.CAR_API + this.JSON);
  }

  get(id: string) {
    return this.http.get(this.CAR_API + '/' + id + this.JSON);
  }

  save(car: any): Observable<any> {
    let result: Observable<any>;
    if (car.id) {
      result = this.http.put(this.CAR_API + '/' + car.id + this.JSON, car);
    }
    return result;
  }

  remove(id: string) {
    return this.http.delete(this.CAR_API + '/' + id + this.JSON);
  }
}
