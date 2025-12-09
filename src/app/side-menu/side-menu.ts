import { Component } from '@angular/core';
import { LucideAngularModule, ChevronDown, ChevronRight, KeyRound
  ,Box, User, BanknoteArrowUp, BadgePercent, MessageCircleQuestionMark,
  Settings
 } from 'lucide-angular';

@Component({
  selector: 'app-side-menu',
  imports: [LucideAngularModule],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css',
})
export class SideMenu {
  ChevronDown = ChevronDown
  ChevronRight = ChevronRight
  KeyRound = KeyRound
  Box = Box
  User = User
  BanknoteArrowUp = BanknoteArrowUp
  BadgePercent = BadgePercent
  MessageCircleQuestionMark = MessageCircleQuestionMark
  Settings = Settings
}
