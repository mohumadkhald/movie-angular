import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute, Data } from '@angular/router';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { CommonModule, NgFor, NgIf} from '@angular/common';
import { Movie } from '../interface/movie';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone:true,
  imports:[MovieCardComponent,NgFor,NgIf,FormsModule]

})
export class SearchComponent implements OnInit {
  searchQuery: string = '';
  searchResults: Movie[] = [];

  constructor(private moviesService: MoviesService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['query']; 
      this.searchMovies();
    });
    
  }

  searchMovies(movieName: string = this.searchQuery) {
      this.moviesService.getSearch(movieName).subscribe(
        (data) => {
          console.log('API Response:', data);
          this.searchResults = data.results;
        
      console.log(this.searchResults)
        },
        (error) => {
          console.error('API Error:', error);
        }
      );
  }
  

}
