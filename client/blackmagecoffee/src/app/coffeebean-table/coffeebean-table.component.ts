import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CoffeebeanDataSource } from './coffee-bean-datasource';
import { CoffeeBean } from '../coffeebean';
import { DataService } from '../data.service';

@Component({
  selector: 'app-coffeebean-table',
  templateUrl: './coffeebean-table.component.html',
  styleUrls: ['./coffeebean-table.component.css']
})
export class CoffeebeanTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['Origin', 'Quantity', 'Bought', 'Button']
  toggleForm: boolean = false;
  coffeebeanDataSource: CoffeebeanDataSource;

  constructor(public dataservice: DataService) { 
    this.coffeebeanDataSource = new CoffeebeanDataSource(this.dataservice);
  }
 


  // deleteCoffeeBean(id: CoffeeBean["_id"]) {
  //   this.dataservice.deleteCoffeeBean(id)
  //     .subscribe(res => {
  //       console.log(res);
  //       // var i = this.coffeebeanList.findIndex(coffeebean => coffeebean._id === id)
  //       // if (i !== -1) {
  //       //   this.coffeebeanList.splice(i, 1);
  //       // }
  //       this.getCoffeeBeans();
  //     }
  //   )
  // }

  deleteCoffeeBean(id: CoffeeBean["_id"]) {
    console.log("deleting id:");
    console.log(id);
    this.dataservice.deleteCoffeeBean(id);
  }

  ngOnInit(): void {
    this.coffeebeanDataSource.loadCoffeeBeans();
  }

  ngAfterViewInit(): void {
    // this.coffeebeanDataSource.loadCoffeeBeans();
  }

}
