import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';


@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    BrowserModule, CommonModule, ProductsRoutingModule
  ],
  providers: [],
  bootstrap: [ProductsComponent]
})
export class ProductsModule { }
