import { Component, OnInit } from '@angular/core';
import { Fitness } from './../../model/fitness';
import { ActivatedRoute, Router } from '@angular/router';
import { FitnessService } from 'src/app/service/fitness.service';

@Component({
  selector: 'app-fitnessbyworkoutsubtype',
  templateUrl: './fitnessbyworkoutsubtype.component.html',
  styleUrls: ['./fitnessbyworkoutsubtype.component.css']
})
export class FitnessbyworkoutsubtypeComponent implements OnInit {

  allfitness: Fitness[];
  // latitude: number;
  // longitude: number;
  subtype: string;
  // locationChosen = false;
  // hidden = false;
  // panelOpenState = false;
  constructor(private route: ActivatedRoute, private fitnessService:FitnessService, private router: Router) { }
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.subtype = params.get('subtype');
      this.getDetailsBySubType(this.subtype);
    }
    );

  }


  // tslint:disable-next-line:ban-types
  getDetailsBySubType(subtype: string): any {
    this.fitnessService.getfitnessBysubtypeofWorkout(subtype).subscribe((response) =>
      this.allfitness = response);
  }
  // onChoseLocation(event): any {
  //   this.latitude = event.coords.lat;
  //   this.longitude = event.coords.lng;
  //   this.locationChosen = true;
  // }

  // toggleBadgeVisibility(): any {
  //   this.hidden = !this.hidden;
  // }
  // onClick(placeId: number): any {
  //   this.router.navigate(['tripSingleCard', placeId]);
  // }
}
