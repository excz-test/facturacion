import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { AddCardComponent } from './pages/add-card/add-card.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'details/:city', component: DetailsComponent},
  {path: 'add', component: AddCardComponent},
  /*{path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},*/
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
