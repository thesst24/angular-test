import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenu } from "./side-menu/side-menu";
import { Nav } from "./nav/nav";
import { Customer } from "./pages/customer/customer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideMenu, Nav, Customer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dashboard-customer');
}
