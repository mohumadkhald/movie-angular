// star-rating.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  template: `
    <div class="star-rating">
      <span class="me-3">Rate: </span>
      <!-- Static stars with fixed color and size -->
      <i class="fas fa-star static-star" *ngFor="let _ of staticStars"></i>
      <!-- Dynamic stars with ngClass -->
      <ng-container *ngFor="let _ of dynamicStars; let i = index">
        <i class="fas dynamic-star" [ngClass]="{'fa-star': i < roundedRating, 'fa-star-o': i >= roundedRating}"></i>
      </ng-container>
    </div>
  `,
  styles: [
    `
      .star-rating {
        display: flex;
        align-items: center;
        width: 100%; /* Use 100% width to make it responsive */
      }

      .static-star,
      .dynamic-star {
        color: grey;
        font-size: 1.5em;
        margin-right: 5px;
      }

      .dynamic-star {
        color: yellow;
        position: relative;
        left: -320px; /* Adjust the positioning as needed for smaller screens */
      }

      /* Media queries for responsiveness */
      @media (max-width: 768px) {
        .dynamic-star {
          font-size: 1.5em; /* Adjust the font size for smaller screens */
          left: -320px; /* Adjust the positioning for smaller screens */
        }
      }
    `,
  ],
  imports: [CommonModule],
})
export class StarRatingComponent {
  private _rating: number = 5; // Default to a rating of 5 for demonstration

  @Input()
  set rating(value: number) {
    // Ensure the rating is between 1 and 10
    this._rating = Math.max(1, Math.min(10, Math.round(value)));
  }

  get rating(): number {
    return this._rating;
  }

  get roundedRating(): number {
    return Math.round(this._rating);
  }

  // Arrays to control the number of static and dynamic stars
  staticStars = Array(10).fill(null);
  dynamicStars = Array(10).fill(null);
}
