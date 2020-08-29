import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FitnessService } from 'src/app/service/fitness.service';
import { Fitness } from 'src/app/model/fitness';

@Component({
  selector: 'app-fitnessbyduration',
  templateUrl: './fitnessbyduration.component.html',
  styleUrls: ['./fitnessbyduration.component.css']
})
export class FitnessbydurationComponent implements OnInit {

  allfitness:Fitness[];
  // latitude: number;
  // longitude: number;
  // tslint:disable-next-line:ban-types
   duration: number;
  // locationChosen = false;
   hidden = false;
   panelOpenState = false;
  constructor(private route: ActivatedRoute, private fitnessService: FitnessService, private router: Router) { }
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.duration = +params.get('duration');
      this.getfitnessByDuration(this.duration);
    }
    );

  }


  // tslint:disable-next-line:ban-types
  getfitnessByDuration(duration: number): any {
    this.fitnessService.getfitnessByduration(duration).subscribe((response) =>
      this.allfitness = response);
  }
  // onChoseLocation(event): any {
  //   this.latitude = event.coords.lat;
  //   this.longitude = event.coords.lng;
  //   this.locationChosen = true;
  // }

  toggleBadgeVisibility(): any {
    this.hidden = !this.hidden;
  }
  // onClick(placeId: number): any {
  //   this.router.navigate(['tripSingleCard', placeId]);
  // }

}
