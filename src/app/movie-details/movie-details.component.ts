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
  constructor(private moviesService: MoviesService,private route:ActivatedRoute, private router: Router,public wishlistService: WishlistService) {}

  ngOnChanges() {
    // const currentId : any = this.route.snapshot.paramMap.get('id');
    this.moviesService.getMovieDetails(this.id).subscribe((res:any) => {
      if (res) {
        this.movie = res;        
      } else {
        this.router.navigate ( ['/not-found'] );
      }
    });
    this.moviesService.getRecommendDetails(this.id).subscribe((res:Data) => {
      if (res) {
        this.movies = res["results"];
      } else {
        console.error("No Movies recommend found in the response.");
      }
    });

  }
  
}
