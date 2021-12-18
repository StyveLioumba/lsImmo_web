import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {AnnonceComponent} from "./components/annonce/annonce.component";
import {DetailComponent} from "./components/detail/detail.component";
import {LoginComponent} from "./components/login/login.component";
import {DashbordComponent} from "./components/dashbord/dashbord.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'contact',component:AboutComponent},
  {path:'annonces',component:AnnonceComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashbordComponent},
  {path:'annonces/:annonceId',component:DetailComponent},
  {path:'',redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
