import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OpeningComponent } from 'src/app/snackBar/opening/opening.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  styleUrls: ['./fitness.component.css']
})
export class FitnessComponent implements OnInit {

  durationInSeconds = 1;
  panelOpenState = false;
  constructor( private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:ban-types
  // openBody(workoutType: string): any
  // {
  // this.snackBar.openFromComponent(OpeningComponent, {
  //   duration: this.durationInSeconds * 1000,
  //   panelClass: ['success']
  // });
  // this.router.navigate([{ outlets: { fitnessOutlet: ['fitnessallSearchBySubType', workoutType] }}], {relativeTo: this.route});
  // }

  // tslint:disable-next-line:ban-types
  // openMind(workoutType: string): any
  // {
  //     this.snackBar.openFromComponent(OpeningComponent, {
  //   duration: this.durationInSeconds * 1000,
  //   panelClass: ['success']
  // });
  //     this.router.navigate([{ outlets: { fitnessOutlet: ['fitnesssallSearchBySeason', workoutType] }}], {relativeTo: this.route});
  // }
  // openopenFullBodyWorkout(subtypeofWorkout: string): any
  // {
  //     this.snackBar.openFromComponent(OpeningComponent, {
  //   duration: this.durationInSeconds * 1000,
  //   panelClass: ['success']
  // });
  //     this.router.navigate([{ outlets: { fitnessOutlet: ['fitnessallSearchByRating', subtypeofWorkout] }}], {relativeTo: this.route});
  // }
 
  openFullBodyWorkout(workoutType: string): any
  {
      this.snackBar.openFromComponent(OpeningComponent, {
    duration: this.durationInSeconds * 1000,
    panelClass: ['success']
  });
      this.router.navigate([{ outlets: { fitnessOutlet: ['fitnessbyworkouttype', workoutType] }}], {relativeTo: this.route});
  }

  openBoxing(workoutType: string): any
  {
      this.snackBar.openFromComponent(OpeningComponent, {
    duration: this.durationInSeconds * 1000,
    panelClass: ['success']
  });
      this.router.navigate([{ outlets: { fitnessOutlet: ['fitnessbyworkouttype', workoutType] }}], {relativeTo: this.route});
  }

  openYoga(workoutType: string): any
  {
      this.snackBar.openFromComponent(OpeningComponent, {
    duration: this.durationInSeconds * 1000,
    panelClass: ['success']
  });
      this.router.navigate([{ outlets: { fitnessOutlet: ['fitnessbyworkouttype', workoutType] }}], {relativeTo: this.route});
  }

  openDance(workoutType: string): any
  {
      this.snackBar.openFromComponent(OpeningComponent, {
    duration: this.durationInSeconds * 1000,
    panelClass: ['success']
  });
      this.router.navigate([{ outlets: { fitnessOutlet: ['fitnessbyworkouttype', workoutType] }}], {relativeTo: this.route});
  }

  openMind(workoutType: string): any
  {
      this.snackBar.openFromComponent(OpeningComponent, {
    duration: this.durationInSeconds * 1000,
    panelClass: ['success']
  });
      this.router.navigate([{ outlets: { fitnessOutlet: ['fitnessbyworkouttype', workoutType] }}], {relativeTo: this.route});
  }

  openDuration(duration:number): any
  {
      this.snackBar.openFromComponent(OpeningComponent, {
    duration: this.durationInSeconds * 1000,
    panelClass: ['success']
  });
      this.router.navigate([{ outlets: { fitnessOutlet: ['fitnessbyduration', duration] }}], {relativeTo: this.route});
  }

  openRating(rating: number ): any
  {
      this.snackBar.openFromComponent(OpeningComponent, {
    duration: this.durationInSeconds * 1000,
    panelClass: ['success']
  });
      this.router.navigate([{ outlets: { fitnessOutlet: ['fitnessbyrating', rating] }}], {relativeTo: this.route});
  }

}
