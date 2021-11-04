import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductsComponent } from './products.component';


@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ProductsComponent]
})
export class ProductsModule { }
