import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//other imports
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeBeanComponent } from './coffee-bean/coffee-bean.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material imports
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatTableModule } from '@angular/material/table'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HeaderComponent } from './header/header.component'
import { MatToolbarModule } from '@angular/material/toolbar';
import { CoffeebeanTableComponent } from './coffeebean-table/coffeebean-table.component';
import { CoffeeBeanAccordionComponent } from './coffee-bean-accordion/coffee-bean-accordion.component'
import { MatExpansionModule } from '@angular/material/expansion'
@NgModule({
  declarations: [
    AppComponent,
    CoffeeBeanComponent,
    HeaderComponent,
    CoffeebeanTableComponent,
    CoffeeBeanAccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // add
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    // angular material
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
