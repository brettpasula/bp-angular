import { Component, OnInit, signal, viewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PhotoGridComponent } from '../../components/gallery/photo-grid.component';

@Component({
  selector: 'gallery',
  standalone: true,
  imports: [MatCardModule, PhotoGridComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent implements OnInit {
  cols = signal<number>(1);

  ngOnInit() {
    if (window.innerWidth > 1000) {
      this.cols.set(2);
    }
  }
}
