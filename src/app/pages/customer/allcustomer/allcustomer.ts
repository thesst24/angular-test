import { Component } from '@angular/core';
import { LucideAngularModule, ChevronDown } from 'lucide-angular';
import { ɵEmptyOutletComponent } from "@angular/router";
import { CommonModule } from '@angular/common';

export interface DataCustomers {
    name: string;
    company: string;
    phone: string;
    email: string;
    country: string;
    status: string;
}

@Component({
  selector: 'app-allcustomer',
  imports: [LucideAngularModule,CommonModule],
  templateUrl: './allcustomer.html',
  styleUrl: './allcustomer.css',
})
export class Allcustomer {
  ChevronDown = ChevronDown

 headerData = [
  { label: "Customers Name", key: "name" },
  { label: "Company", key: "company" },
  { label: "Phone", key: "phone" },
  { label: "Email", key: "email" },
  { label: "Country", key: "country" },
  { label: "Status", key: "status" },
] as const;


  dataCustomer: DataCustomers[] = [
    { name: 'Jane Cooper', company:"Microsoft", phone:"(225) 555-0118", email:"jane@microsoft.com", country:"United States",status:"Active"},
    { name: 'Floyd Miles', company:"Yahoo", phone:"(205) 555-0100", email:"floyd@yahoo.com", country:"Kiribati",status:"Inactive"},
    { name: 'Ronald Richards', company:"Adobe", phone:"(302) 555-0107", email:"ronald@adobe.com", country:"Israel",status:"Inactive"},
    { name: 'Marvin McKinney', company:"Tesla", phone:"(252) 555-0126", email:"marvin@tesla.com", country:"Iran",status:"Active"},
    {name: 'Jerome Bell', company:"Google", phone:"(628) 555-0129", email:"jerome@google.com", country:"Reunion",status:"Active"},
    { name: 'Kathryn Murphy', company:"Microsoft", phone:"(406) 555-0102", email:"Kathryn@microsoft.com", country:"Curacao",status:"Active"},
    { name: 'Jacob Janes', company:"Yahoo", phone:"(208) 555-0112", email:"jacob@yahoo.com", country:"Brazil",status:"Active"},
    {name: 'Kristin Watson', company:"Facebook", phone:"(704) 555-0127", email:"kristin@facebook", country:"Aland Islands",status:"Inactive"},
  ]
}
