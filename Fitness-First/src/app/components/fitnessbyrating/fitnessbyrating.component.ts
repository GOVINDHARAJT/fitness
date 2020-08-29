import { Component, OnInit } from '@angular/core';
import { Fitness } from './../../model/fitness';
import { ActivatedRoute, Router } from '@angular/router';
import { FitnessService } from 'src/app/service/fitness.service';

@Component({
  selector: 'app-fitnessbyrating',
  templateUrl: './fitnessbyrating.component.html',
  styleUrls: ['./fitnessbyrating.component.css']
})
export class FitnessbyratingComponent implements OnInit {

  allfitness:Fitness[];
  // latitude: number;
  // longitude: number;
  // tslint:disable-next-line:ban-types
   rating: number;
  // locationChosen = false;
   hidden = false;
   panelOpenState = false;
  constructor(private route: ActivatedRoute, private fitnessService: FitnessService, private router: Router) { }
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.rating = +params.get('rating');
      this.getfitnessByRating(this.rating);
    }
    );

  }


  // tslint:disable-next-line:ban-types
  getfitnessByRating(rating: number): any {
    this.fitnessService.getfitnessByrating(rating).subscribe((response) =>
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
