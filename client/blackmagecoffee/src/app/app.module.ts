import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//other imports
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeBeanComponent } from './coffee-bean/coffee-bean.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeBeanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // add
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
