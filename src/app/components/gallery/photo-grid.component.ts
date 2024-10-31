import { Component, input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'photo-grid',
  standalone: true,
  imports: [MatGridListModule, NgOptimizedImage],
  templateUrl: './photo-grid.component.html',
  styleUrl: './photo-grid.component.css',
})
export class PhotoGridComponent {
  cols = input<number>(1);
}
