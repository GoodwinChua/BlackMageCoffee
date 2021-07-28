import { Injectable } from '@angular/core';
// add http imports for server requests
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
// add rxjs operators for custom filtering
import { map, filter, scan } from 'rxjs/operators';
import { CoffeeBean } from './coffeebean';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCoffeeBeans() {
    return this.http
      .get<CoffeeBean[]>('http://localhost:3000/api/coffeebeans')
      .pipe(map(res => res));
      
  }

  addCoffeeBeans(newCoffeeBean: any) {
    let headers = new HttpHeaders();
    headers.append('content-type', 'application/json');
    return this.http
      .post('http://localhost:3000/api/coffeebean', newCoffeeBean, { headers: headers })
      .pipe(map(res => res));

  }
}
