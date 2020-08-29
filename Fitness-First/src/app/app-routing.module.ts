import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FitnessComponent } from './components/fitness/fitness.component';
import { FitnessallComponent } from './components/fitnessall/fitnessall.component';
import { FitnessbyworkoutypeComponent } from './components/fitnessbyworkoutype/fitnessbyworkoutype.component';
import { FitnessbytypeComponent } from './components/fitnessbytype/fitnessbytype.component';
import { FitnessbydurationComponent } from './components/fitnessbyduration/fitnessbyduration.component';
import { FitnessbyratingComponent } from './components/fitnessbyrating/fitnessbyrating.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { FitnessbyworkoutsubtypeComponent } from './components/fitnessbyworkoutsubtype/fitnessbyworkoutsubtype.component';

const routes: Routes = [
  {path: '', component: LoginpageComponent},//LandingpageComponent},
  {path: 'home', component: LandingpageComponent},
  {path: 'logout', component: LoginpageComponent},

  {path: 'aboutus', component: AboutusComponent},
  { path: 'gallery', component: GalleryComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'fitness', component: FitnessComponent,
  children: [
    {path: '', component: FitnessallComponent, outlet: 'fitnessOutlet'},
    // { path: 'fitnessbyworkouttype/:workoutType', component: FitnessbyworkoutypeComponent, outlet: 'fitnessOutlet' },
    // { path: 'fitnessbysubtype/:subtype', component: FitnessbyworkoutsubtypeComponent,outlet: 'fitnessOutlet' },
     { path: 'fitnessbyduration/:duration', component: FitnessbydurationComponent, outlet: 'fitnessOutlet' },
     { path: 'fitnessbyrating/:rating', component: FitnessbyratingComponent, outlet: 'fitnessOutlet'}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
