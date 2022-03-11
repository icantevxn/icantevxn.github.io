import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewCardDetailsComponent } from './view-card-details/view-card-details.component';

const routes: Routes = [
  { path: '', redirectTo: "/home" , pathMatch: "full"},
  { path: 'home', component: HomeComponent },
  { path: 'details/:id', component: ViewCardDetailsComponent },
  { path: 'add', component: AddContactComponent },
  { path: 'edit/:id', component: EditContactComponent },
  { path: 'pagenotfound', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
