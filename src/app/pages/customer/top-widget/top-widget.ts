import { Component } from '@angular/core';
import { LucideAngularModule,Users,ArrowUp, UserRoundCheck, Monitor, ArrowDown } from 'lucide-angular';

@Component({
  selector: 'app-top-widget',
  imports: [LucideAngularModule],
  templateUrl: './top-widget.html',
  styleUrl: './top-widget.css',
})
export class TopWidget {
  Users = Users
  ArrowUp = ArrowUp
  ArrowDown = ArrowDown
  UserRoundCheck = UserRoundCheck
  Monitor = Monitor
}
