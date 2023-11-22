import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersListComponent } from './users-list/users-list.component';



@NgModule({
  declarations: [
    UsersDetailsComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UsersDetailsComponent,
    UsersListComponent
  ]
})
export class UsersModule { }
