import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { RouterModule } from '@angular/router';
import { NotFountComponent } from './not-fount/not-fount.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostsModule,
    UsersModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
