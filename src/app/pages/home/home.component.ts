import { Component } from '@angular/core';
import { IconRowComponent } from '../../icon-row/icon-row.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'home',
  standalone: true,
  imports: [IconRowComponent, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent { }
