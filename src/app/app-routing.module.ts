import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'profile/:id',
    component: DoctorProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
