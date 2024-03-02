import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { MovieListComponent } from './movie-list/movie-list.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavComponent, MovieListComponent]
})
export class AppComponent {
  title = 'Movie-App';
}
