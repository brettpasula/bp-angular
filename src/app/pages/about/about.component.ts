import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { IconRowComponent } from '../../components/icon-row/icon-row.component';

@Component({
  selector: 'about',
  standalone: true,
  imports: [
    MatCardModule,
    GalleryComponent,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    IconRowComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
