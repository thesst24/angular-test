import { Component } from '@angular/core';
import { TopWidget } from "./top-widget/top-widget";
import { Allcustomer } from "./allcustomer/allcustomer";
import { Pagination } from "./pagination/pagination";

@Component({
  selector: 'app-customer',
  imports: [TopWidget, Allcustomer, Pagination],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer {

}
