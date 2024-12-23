import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { MenuBarComponent } from './shared/components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBarComponent],
  template: '<app-menu-bar></app-menu-bar><router-outlet></router-outlet>',
  standalone: true,
})
export class AppComponent {
  title = 'cobm-web';

  constructor(private primeng: PrimeNG) {
    this.primeng.theme.set({
      preset: Aura,
      options: {
        cssLayer: {
          name: 'primeng',
          order: 'tailwind-base, tailwind-utilities'
        },
        darkModeSelector: '.app-dark-mode',
      }
    })
  }
}
