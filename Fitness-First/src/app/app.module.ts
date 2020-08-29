import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgmCoreModule } from '@agm/core';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { AngularWebStorageModule } from 'angular-web-storage';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';

import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTreeModule} from '@angular/material/tree';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FitnessComponent } from './components/fitness/fitness.component';
import { OpeningComponent } from './snackBar/opening/opening.component';
import { FitnessallComponent } from './components/fitnessall/fitnessall.component';
import { FitnessbyworkoutypeComponent } from './components/fitnessbyworkoutype/fitnessbyworkoutype.component';
import { FitnessbydurationComponent } from './components/fitnessbyduration/fitnessbyduration.component';
import { FitnessbyratingComponent } from './components/fitnessbyrating/fitnessbyrating.component';
import { FitnesssinglecardComponent } from './components/fitnesssinglecard/fitnesssinglecard.component';
import { FitnessbyworkoutsubtypeComponent } from './components/fitnessbyworkoutsubtype/fitnessbyworkoutsubtype.component';
import { FitnessbytypeComponent } from './components/fitnessbytype/fitnessbytype.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { LoginheaderComponent } from './components/loginheader/loginheader.component';
import { LoginsnackbarComponent } from './snackBar/loginsnackbar/loginsnackbar.component';
import { LoginFailssnackbarComponent } from './snackBar/login-failssnackbar/login-failssnackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactusComponent,
    AboutusComponent,
    HomepageComponent,
    GalleryComponent,
    LandingpageComponent,
    FitnessComponent,
    OpeningComponent,
    FitnessallComponent,
    FitnessbyworkoutypeComponent,
    FitnessbydurationComponent,
    FitnessbyratingComponent,
    FitnesssinglecardComponent,
    FitnessbyworkoutsubtypeComponent,
    FitnessbytypeComponent,
    LoginpageComponent,
    LoginheaderComponent,
    LoginsnackbarComponent,
    LoginFailssnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    AngularWebStorageModule,
    MatCardModule,
    MatBadgeModule,
    MatButtonModule,
    NgImageSliderModule,
    MatDialogModule,
    MatIconModule,
    MatDividerModule,
    MatExpansionModule,
    MatStepperModule,
    MatTabsModule,
    MatMenuModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTreeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    SocialLoginModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJ-WiPBLTmN1VNiiMm2Dez72VSbMmf0RU'
    })

  ],
  providers: [
    {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '53166985508-rkq81h8kc5va21rndv5eal72rcv739di.apps.googleusercontent.com'
          ),
        },
      ],
    } as SocialAuthServiceConfig,
  }
],
bootstrap: [AppComponent],
schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
