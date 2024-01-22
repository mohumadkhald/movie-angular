import { AfterContentChecked, Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, Companie } from '../interface/movie';
import { Genre } from '../interface/movie';

import { DatePipe, NgClass,NgFor, NgIf } from '@angular/common';
import { WishlistService } from '../services/wishlist.service';
import { StarRatingComponent } from "../star-rating/star-rating.component";
@Component({
    selector: 'app-movie-item-details',
    standalone: true,
    templateUrl: './movie-item-details.component.html',
    styleUrls: ['./movie-item-details.component.css'],
    imports: [NgClass, NgIf, NgFor, StarRatingComponent]
})
export class MovieItemDetailsComponent implements OnChanges, OnInit {
  @Input() movie!: Movie;
  logos!: string[];
  names!: string[];
  date!: string
  constructor(private route: ActivatedRoute,private datePipe: DatePipe,public wishlistService: WishlistService) { }
  ngOnInit(): void {
    this.date = this.formatDate(this.movie.release_date);
  }

  ngOnChanges() {
    const genreNames:string[] = this.movie.genres.map((genre: Genre) => genre.name);
    this.names = genreNames
    const paths = this.movie.production_companies.map((path: Companie) => path.logo_path)
    this.logos = paths;
  }
  
  private formatDate(date: Date | string): string {
    return this.datePipe.transform(date, 'MMM d, y') || '';
  }

  toggleWishlist(): void {
    if (this.wishlistService.isInWishlist(this.movie)) {
      this.wishlistService.removeFromWishlist(this.movie);
    } else {
      this.wishlistService.addToWishlist(this.movie);
    }
  }
}

