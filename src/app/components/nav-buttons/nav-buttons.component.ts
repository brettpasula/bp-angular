import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'nav-buttons',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterLink, RouterOutlet],
  templateUrl: './nav-buttons.component.html',
  styleUrl: './nav-buttons.component.css',
})
export class NavButtonsComponent {}
