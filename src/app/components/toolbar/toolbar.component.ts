import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { NavButtonsComponent } from '../nav-buttons/nav-buttons.component';
import { filter } from 'rxjs';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';

@Component({
  selector: 'toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterLink,
    RouterOutlet,
    MatIconModule,
    NavButtonsComponent,
    NavMenuComponent,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent implements OnInit {
  private router = inject(Router);
  private path = signal<string>('');
  public showNavigation = computed(() => this.path() !== '/');
  public useNavButtons = computed(() => window.innerWidth > 1000);

  ngOnInit(): void {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((value) => {
        this.path.set(value.url);
      });
  }
}
