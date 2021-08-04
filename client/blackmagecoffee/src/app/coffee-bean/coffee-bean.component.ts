import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
// add
import { CoffeeBean } from '../coffeebean';

// add 2
import { DataService } from '../data.service';
import { CoffeebeanDataSource } from '../coffeebean-table/coffee-bean-datasource';


@Component({
  selector: 'app-coffee-bean',
  templateUrl: './coffee-bean.component.html',
  styleUrls: ['./coffee-bean.component.css'],
  // add 3 connection provider
  providers: []
})
export class CoffeeBeanComponent implements OnInit {

  selectedCoffeeBean: CoffeeBean = <CoffeeBean>{};
  toggleForm: boolean = false;
  displayedColumns: string[] = ['Origin', 'Quantity', 'Bought', 'Button'];

  constructor(private dataservice: DataService, private coffeebeanDataSource : CoffeebeanDataSource) {
  }

  //add get method from server
  getCoffeeBeans() {

    // this.coffeebeanDataSource.loadCoffeeBeans();
    // this.coffeebeanDataSource.log(1);
    // this.dataservice.getCoffeeBeans()
    //   .subscribe(res => {
    //     this.coffeebeanList = res;
    //     console.log('loading from dataservice');
    //   }, error => {
    //     console.log('Could not get database');
    //   });
  }

  // add later
  addCoffeeBean(form: NgForm) {
    //remove this later
    console.log(form.value);

    if (form.invalid) {
      return;
    }

    let newCoffeeBean: CoffeeBean = {
      itemName: form.value.itemName,
      itemQuantity: form.value.itemQuantity,
      itemBought: false
    }

    this.coffeebeanDataSource.addCoffeeBean(newCoffeeBean);
    form.resetForm();

    // this.dataservice.addCoffeeBeans(newCoffeeBean)
    //   .subscribe(res => { // need to subscribe to data service observable
    //     console.log(res); // log the coffee bean object
    //     this.getCoffeeBeans(); // call the updated list
    //     form.reset();
    //   })
  }

  editCoffeeBean(form: NgForm) {
    let editedCoffeeBean: CoffeeBean = {
      _id: this.selectedCoffeeBean._id,
      itemName: form.value.itemName,
      itemQuantity: form.value.itemQuantity,
      itemBought: this.selectedCoffeeBean.itemBought
    }

    this.dataservice.editCoffeeBeans(editedCoffeeBean)
      .subscribe(res => {
        console.log("updated coffee bean: " + res);
        this.getCoffeeBeans();
        this.toggleForm = !this.toggleForm;
      })
  }



  showEditForm(coffeebean: CoffeeBean) {
    this.selectedCoffeeBean = coffeebean;
    this.toggleForm = !this.toggleForm;
    console.log(coffeebean);
    console.log(this.selectedCoffeeBean)
  }

  showAddForm() {
    this.toggleForm = !this.toggleForm;
  }

  updateItemBought(coffeebean: CoffeeBean) {
    coffeebean.itemBought = !coffeebean.itemBought;
    this.dataservice.editCoffeeBeans(coffeebean)
      .subscribe(res => {
        console.log("updated coffee bean bought: " + coffeebean.itemBought);
        this.getCoffeeBeans();
      })
  }

  ngOnInit(): void {
    // add 3
    // this.getCoffeeBeans();
  }

}
