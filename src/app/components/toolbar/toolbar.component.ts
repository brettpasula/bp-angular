import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { AboutContactComponent } from '../about-contact/about-contact.component';
import { filter } from 'rxjs';

@Component({
  selector: 'toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterLink,
    RouterOutlet,
    MatIconModule,
    AboutContactComponent,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent implements OnInit {
  private router = inject(Router);
  private path = signal<string>('');
  public hideButtons = computed(() => this.path() === '/');

  ngOnInit(): void {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((value) => {
        this.path.set(value.url);
      });
  }
}
