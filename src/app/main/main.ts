import { Component } from '@angular/core';
import { LucideAngularModule, ChevronDown } from "lucide-angular";

@Component({
  selector: 'app-main',
  imports: [LucideAngularModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  ChevronDown = ChevronDown;
}
