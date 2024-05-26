import { Component } from '@angular/core';
import { IconRowComponent } from '../../components/icon-row/icon-row.component';
import { MatCardModule } from '@angular/material/card';
import { AboutContactComponent } from '../../components/about-contact/about-contact.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [IconRowComponent, MatCardModule, AboutContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
