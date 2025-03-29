import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'nav-buttons',
    imports: [MatToolbarModule, MatButtonModule, RouterLink],
    templateUrl: './nav-buttons.component.html',
    styleUrl: './nav-buttons.component.css'
})
export class NavButtonsComponent {}
