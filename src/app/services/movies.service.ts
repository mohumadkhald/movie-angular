import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  apiKey: string = "3efe58175903c431f91fd13bff03e942";
  constructor(private http: HttpClient) {}
  getPopularMovies(page: number): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&page=${page}`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  getMovieDetails(id: number): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  getRecommendDetails(movie_id: number): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${this.apiKey}`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  getSearch(movieName: string): Observable<any> {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${movieName}`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
