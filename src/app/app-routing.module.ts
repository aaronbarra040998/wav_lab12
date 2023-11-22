import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersDetailsComponent } from './users/users-details/users-details.component';
import { NotFountComponent } from './not-fount/not-fount.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'posts/:id', component: PostDetailsComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id', component: UsersDetailsComponent },
  { path: '**', component: NotFountComponent }, // Ruta wildcard para NotFound
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
