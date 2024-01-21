import { Component, Input, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { Movie } from '../interface/movie';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CustomDatePipe } from '../pipes/format-date.pipe';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';


@Component({

  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
  imports:[NgFor, NgIf,RouterLink,CustomDatePipe,NgbRatingModule],
  standalone:true
})
export class WishListComponent implements OnInit {
  @Input() movie!: Movie;

  constructor(public wishlistService: WishlistService) {}

  removeFromWishlist(movie: Movie): void {
    this.wishlistService.removeFromWishlist(movie);
  }
  ngOnInit() {
  }
  // toggleWishlist(): void {
  //   if (this.wishlistService.isInWishlist(this.movie)) {
  //     this.wishlistService.removeFromWishlist(this.movie);
  //   } else {
  //     this.wishlistService.addToWishlist(this.movie);
  //   }
  // }
}
