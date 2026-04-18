import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NavigationEnd, Router } from '@angular/router';
import { NavButtonsComponent } from '../nav-buttons/nav-buttons.component';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ThemeService } from '../../services/theme.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';

@Component({
  selector: 'toolbar',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    NavButtonsComponent,
    NavMenuComponent,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent implements OnInit {
  private router = inject(Router);
  private breakpointObserver = inject(BreakpointObserver);
  themeService = inject(ThemeService);
  private path = signal<string>('');

  public showNavigation = computed(() => this.path() !== '/');

  public useNavButtons = toSignal(
    this.breakpointObserver
      .observe('(min-width: 1000px)')
      .pipe(map((state) => state.matches)),
    { initialValue: window.innerWidth >= 1000 },
  );

  ngOnInit(): void {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((value) => {
        this.path.set(value.url);
      });
  }
}
