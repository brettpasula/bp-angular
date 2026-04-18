import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'nav-buttons',
  imports: [MatButtonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-buttons.component.html',
  styleUrl: './nav-buttons.component.css',
})
export class NavButtonsComponent {}
