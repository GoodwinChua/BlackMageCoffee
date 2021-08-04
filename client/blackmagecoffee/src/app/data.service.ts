import { Injectable } from '@angular/core';
// add http imports for server requests
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
// add rxjs operators for custom filtering ?
import { map, filter, scan } from 'rxjs/operators';
import { CoffeeBean } from './coffeebean';

// observable binding
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //binding ?
  private coffeebeanList: CoffeeBean[] = [];
  private listUpdated = new BehaviorSubject<CoffeeBean[]>([]);

  constructor(private http: HttpClient) {
  }

  // used by accordion
  getOldCoffeeBeans() {
    console.log("should be added in data service array already");
    console.log([...this.coffeebeanList]);
    console.log(this.coffeebeanList);
    return [...this.coffeebeanList];
  }

  getCoffeeBeans() {
    console.log("getting coffee beans from server");
    this.http.get<CoffeeBean[]>('http://localhost:3000/api/coffeebeans')
      .subscribe((coffeebeans) => {
        this.coffeebeanList = coffeebeans;
        this.listUpdated.next([...this.coffeebeanList]);
        console.log(this.coffeebeanList);
      });
  }

  addCoffeeBeans(newCoffeeBean: CoffeeBean) {
    let headers = new HttpHeaders();
    headers.append('content-type', 'application/json');
    console.log('adding coffee bean to db');
    console.log(newCoffeeBean);
    this.http.post<{ msg: string, _id: string}>('http://localhost:3000/api/coffeebean', newCoffeeBean, { headers: headers })
      .subscribe( res => {
        //binding
        console.log(res);

        newCoffeeBean._id = res._id;
  
        this.coffeebeanList.push(newCoffeeBean);
        console.log([...this.coffeebeanList]);
        this.listUpdated.next([...this.coffeebeanList]);
        // this.getCoffeeBeans();
        console.log(res);
      });
  }

  deleteCoffeeBean(id: CoffeeBean["_id"]) {
    console.log([...this.coffeebeanList]);
    this.http.delete('http://localhost:3000/api/coffeebean/' + id)
      .subscribe(res => {
        console.log(res);
        // this.getCoffeeBeans(); slow approach
        const updatedCoffeeBeanList = this.coffeebeanList.filter(coffeebean => coffeebean._id !== id);
        this.coffeebeanList = updatedCoffeeBeanList;
        this.listUpdated.next([...this.coffeebeanList]);
      });
  }

  editCoffeeBeans(newCoffeeBean: CoffeeBean) {
    let headers = new HttpHeaders();
    headers.append('content-type', 'application/json');
    return this.http
      .put('http://localhost:3000/api/coffeebean/' + newCoffeeBean._id, newCoffeeBean, { headers: headers }).pipe(map(res => res));
  }

  getUpdatedCoffeeBeanList() {
    return this.listUpdated.asObservable();
  }

  completeListUpdated() {
    this.listUpdated.complete();
  }
}
