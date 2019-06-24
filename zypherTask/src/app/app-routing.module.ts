import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ListDetailsComponent } from './list-details/list-details.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'list_details/:id', component: ListDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
