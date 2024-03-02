import { Injectable } from '@angular/core';
import { Movie } from '../interface/movie';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private wishlist: Movie[] = [];
  
  addToWishlist(movie: Movie): void {
    if (!this.isInWishlist(movie)) {
      this.wishlist.push(movie);
    }
  }

  removeFromWishlist(movie: Movie): void {
    this.wishlist = this.wishlist.filter((m) => m.id !== movie.id);
  }

  getWishlist(): Movie[] {
    return this.wishlist;
  }

  isInWishlist(movie: Movie): boolean {
    return this.wishlist.some((m) => m.id === movie.id);
  }
}
