import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
// import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path: '', component: BookComponent }
  // { path: 'movies', component: MoviesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
