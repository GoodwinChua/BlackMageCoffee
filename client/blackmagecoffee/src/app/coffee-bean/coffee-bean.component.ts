import { Component, OnInit } from '@angular/core';
// add
import { CoffeeBean } from '../coffeebean';

// add 2
import { DataService } from '../data.service';


@Component({
  selector: 'app-coffee-bean',
  templateUrl: './coffee-bean.component.html',
  styleUrls: ['./coffee-bean.component.css'],
  providers: [DataService]
})
export class CoffeeBeanComponent implements OnInit {

  //add property
  coffeebeanList: CoffeeBean[]=[];

  constructor(private dataservice: DataService) { }

  //add get method from server
  getCoffeeBeans(){
    this.dataservice.getCoffeeBeans()
    .subscribe( coffeebeans => {
      this.coffeebeanList = coffeebeans;
      console.log('From Data Service: ' + this.coffeebeanList[0].itemName);
    });
  }

  addCoffeeBean(form: { value: any; }){

    console.log(form.value);
  }

  ngOnInit(): void {
    this.getCoffeeBeans();
  }

}
