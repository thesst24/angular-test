import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenu } from "./side-menu/side-menu";
import { Main } from "./main/main";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideMenu, Main],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dashboard-customer');
}
