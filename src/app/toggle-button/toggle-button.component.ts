// toggle-button.component.ts

import { Component } from '@angular/core';
import { toggleDarkMode } from '../thems/them'
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent {

  isDarkMode: boolean = true;

  toggleDarkMode(): void {
    toggleDarkMode();
    this.isDarkMode = !this.isDarkMode;
  }


}
