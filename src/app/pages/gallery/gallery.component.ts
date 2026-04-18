import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PhotoGridComponent } from '../../components/gallery/photo-grid.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'gallery',
  imports: [MatCardModule, PhotoGridComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  private breakpointObserver = inject(BreakpointObserver);

  cols = toSignal(
    this.breakpointObserver
      .observe('(min-width: 1000px)')
      .pipe(map((state) => (state.matches ? 2 : 1))),
    { initialValue: 1 },
  );
}
