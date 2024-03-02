import { Component, Input, OnChanges, OnInit,HostListener } from "@angular/core";
import { MoviesService } from "../services/movies.service";
import { CommonModule } from "@angular/common";
import { Movie } from '../interface/movie';
import { MovieItemDetailsComponent } from "../movie-item-details/movie-item-details.component";
import { MovieRecommendComponent } from "../movie-recommend/movie-recommend.component";
import { ActivatedRoute, Data, Router } from "@angular/router";
import { NotFoundComponent } from "../not-found/not-found.component";
import { WishlistService } from "../services/wishlist.service";
@Component({
    selector: "app-movie-details",
    standalone: true,
    templateUrl: "./movie-details.component.html",
    styleUrls: ["./movie-details.component.css"],
    imports: [CommonModule, MovieItemDetailsComponent, MovieRecommendComponent, NotFoundComponent]
})
export class MovieDetailsComponent implements OnChanges {
  movie !: Movie;
  movies : Movie[] = [];
  @Input() id!: number;
  loading: boolean = true; // Flag to indicate loading state
  showContent: boolean = false; // Flag to control visibility of content
  
  constructor(private moviesService: MoviesService,private route:ActivatedRoute, private router: Router, public wishlistService: WishlistService) {}

  ngOnChanges() {
    // Simulate a 15-second delay
    setTimeout(() => {
      this.loading = false; // Set loading flag to false after 15 seconds
      this.showContent = true; // Set showContent flag to true after 15 seconds
    }, 300);
    
    // Fetch movie details and recommendations after the delay
    this.moviesService.getMovieDetails(this.id).subscribe((res:any) => {
      if (res) {
        this.movie = res;        
      } else {
        this.router.navigate(['/not-found']);
      }
    });
    
    this.moviesService.getRecommendDetails(this.id).subscribe((res: any) => {
      if (res) {
        this.movies = res["results"];
      } else {
        console.error("No Movies recommend found in the response.");
      }
    });
  }
}