import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatGridListModule} from '@angular/material/grid-list';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports:      [ BrowserModule,BrowserAnimationsModule,MatFormFieldModule, FormsModule , AppRoutingModule,MatInputModule,MatGridListModule],
  declarations: [ AppComponent, HelloComponent, ProductsListComponent, ProductsComponent, RegisterComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
