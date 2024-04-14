import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'about-contact',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterLink, RouterOutlet],
  templateUrl: './about-contact.component.html',
  styleUrl: './about-contact.component.css',
})
export class AboutContactComponent {}
