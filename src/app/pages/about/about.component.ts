import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {
  MatExpansionModule,
  MatExpansionPanel,
} from '@angular/material/expansion';

@Component({
    selector: 'about',
    imports: [
        MatCardModule,
        MatIconModule,
        MatDividerModule,
        MatExpansionModule,
    ],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    viewProviders: [MatExpansionPanel]
})
export class AboutComponent {}
