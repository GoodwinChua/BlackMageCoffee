import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from "rxjs";
import { CoffeeBean } from "../coffeebean";
import { DataService } from "../data.service";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class CoffeebeanDataSource implements DataSource<CoffeeBean> {

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private dataservice: DataService){
        // console.log("data source made");
        // // this.dataservice.getCoffeeBeans();
        // console.log("constructor got the coffee beans");
     }

    connect(collectionViewer: CollectionViewer): Observable<CoffeeBean[]> {
        console.log("connect method");
        console.log(this.dataservice.getUpdatedCoffeeBeanList());
        return this.dataservice.getUpdatedCoffeeBeanList();
    }
    disconnect(collectionViewer: CollectionViewer): void {
        this.dataservice.completeListUpdated();
        this.loadingSubject.complete();
    }

    loadCoffeeBeans(){
        console.log("loading coffee beans");    
        this.dataservice.getCoffeeBeans();    
    }

    addCoffeeBean(newCoffeeBean: CoffeeBean){
        console.log("adding coffee bean below");
        console.log(newCoffeeBean);
        this.dataservice.addCoffeeBeans(newCoffeeBean);
    }

}