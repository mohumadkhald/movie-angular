import { CommonModule, DatePipe, NgClass } from "@angular/common";
import {  Component, Input, OnInit } from "@angular/core";
import {  Router } from "@angular/router";
import { Movie } from "../interface/movie";
import { WishlistService } from "../services/wishlist.service";
import { ProgressBarComponent } from "../progress-bar/progress-bar.component";
import { CustomDatePipe } from "../pipes/format-date.pipe";

@Component({
  selector: "app-movie-card",
  standalone: true,
  templateUrl: "./movie-card.component.html",
  styleUrls: ["./movie-card.component.css"],
  imports: [NgClass, CommonModule, ProgressBarComponent,CustomDatePipe],
})
export class MovieCardComponent implements OnInit {
  @Input() movieItem!: Movie;
  constructor(
    private router: Router,
    private datePipe: DatePipe,
    public wishlistService: WishlistService
  ) {}
  

  ngOnInit(): void {
  }

  redirectToDetails(id: number) {
    this.router.navigate(["/movie-details", id]);
  }

  toggleWishlist(): void {
    if (this.wishlistService.isInWishlist(this.movieItem)) {
      this.wishlistService.removeFromWishlist(this.movieItem);
    } else {
      this.wishlistService.addToWishlist(this.movieItem);
    }
  }
}
