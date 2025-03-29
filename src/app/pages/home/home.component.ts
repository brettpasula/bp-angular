import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NavButtonsComponent } from '../../components/nav-buttons/nav-buttons.component';

@Component({
    selector: 'home',
    imports: [MatCardModule, NavButtonsComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {}
