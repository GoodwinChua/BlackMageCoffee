import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoffeeBean } from '../coffeebean';
import { DataService } from '../data.service';

//lifecycle
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-coffee-bean-accordion',
  templateUrl: './coffee-bean-accordion.component.html',
  styleUrls: ['./coffee-bean-accordion.component.css']
})
export class CoffeeBeanAccordionComponent implements OnInit, OnDestroy {

  coffeebeanList : CoffeeBean[] = [];
  private sub : Subscription;

  constructor(private dataservice: DataService) { 
    this.sub = <Subscription>{};
  } // might need to make public?




  // getCoffeebeans(){
  //   this.dataservice.getCoffeeBeans().subscribe(res => {
  //     this.coffeebeanList = res;

  //   })
  // }

  ngOnInit(): void {
    // this.getCoffeebeans();
    this.coffeebeanList = this.dataservice.getOldCoffeeBeans();
    this.sub = this.dataservice.getUpdatedCoffeeBeanList().subscribe( (coffeebeanlist: CoffeeBean[]) => {
      this.coffeebeanList = coffeebeanlist;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
