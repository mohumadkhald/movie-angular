import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    { path: '', component: MovieListComponent ,title: "Movie"},
    { path: 'movie-details/:id',component: MovieDetailsComponent, title: "Movie Details"},
    { path: 'wishlist',component: WishListComponent, title: "Wishlist"},
    { path: 'not-found', component: NotFoundComponent },
    {path:'search-results',component:SearchComponent},
    { path: '**', redirectTo: '/not-found' }
];