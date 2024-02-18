import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { GalleryComponent } from '../../components/gallery/gallery.component';

@Component({
  selector: 'about',
  standalone: true,
  imports: [MatCardModule, MatTabsModule, GalleryComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
