import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { IconRowComponent } from '../../components/icon-row/icon-row.component';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'about',
  standalone: true,
  imports: [
    MatCardModule,
    GalleryComponent,
    MatIconModule,
    MatDividerModule,
    IconRowComponent,
    MatExpansionModule,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  viewProviders: [MatExpansionPanel]
})
export class AboutComponent {}
