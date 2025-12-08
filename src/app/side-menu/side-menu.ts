import { Component } from '@angular/core';
import { LucideAngularModule, ChevronDown, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'app-side-menu',
  imports: [LucideAngularModule],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css',
})
export class SideMenu {
  ChevronDown = ChevronDown
  ChevronRight = ChevronRight
}
