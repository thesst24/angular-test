import { Component } from '@angular/core';
import { LucideAngularModule, ChevronDown,Users,ArrowUp } from "lucide-angular";

@Component({
  selector: 'app-main',
  imports: [LucideAngularModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  ChevronDown = ChevronDown;
  Users = Users;
  ArrowUp = ArrowUp;
}
