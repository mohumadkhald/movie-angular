import { Component, Input, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule,
} from "@angular/router";
import { Movie } from "../interface/movie";
import { CommonModule, DatePipe } from "@angular/common";
import { ProgressBarComponent } from "../progress-bar/progress-bar.component";
import { CustomDatePipe } from "../pipes/format-date.pipe";

@Component({
  selector: "app-movie-recommend",
  standalone: true,
  templateUrl: "./movie-recommend.component.html",
  styleUrls: ["./movie-recommend.component.css"],
  imports: [RouterLink, ProgressBarComponent,CommonModule,CustomDatePipe]
})
export class MovieRecommendComponent {
  @Input() movie!: Movie;
  currentId!: string;
  date!: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) {}
  ngOnInit(): void {

    
  }
  
  redirectToDetails(id: number) {
    const currentId: any = this.route.snapshot.paramMap.get("id");
  
    if (this.movie.id != currentId) {
      // Scroll to the top with a smooth transition
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  
    // Navigate to the movie details page
    this.router.navigate([`/movie-details/${id}`]);
  }

}
