import { Injectable, effect, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly STORAGE_KEY = 'bp-theme';

  theme = signal<'light' | 'dark'>(this.initialTheme());

  constructor() {
    effect(() => {
      document.documentElement.classList.toggle(
        'dark',
        this.theme() === 'dark',
      );
      localStorage.setItem(this.STORAGE_KEY, this.theme());
    });
  }

  toggle(): void {
    this.theme.update((t) => (t === 'light' ? 'dark' : 'light'));
  }

  private initialTheme(): 'light' | 'dark' {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
}
