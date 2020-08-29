import { Component, OnInit } from '@angular/core';
import {  Fitness } from './../../model/fitness';
import { ActivatedRoute, Router } from '@angular/router';
import { FitnessService } from 'src/app/service/fitness.service';

@Component({
  selector: 'app-fitnessbyworkoutype',
  templateUrl: './fitnessbyworkoutype.component.html',
  styleUrls: ['./fitnessbyworkoutype.component.css']
})
export class FitnessbyworkoutypeComponent implements OnInit {


 allfitness: Fitness[];
  
  // tslint:disable-next-line:ban-types
  workoutType: string;
  //hidden: false;
  // locationChosen = false;
  // hidden = false;
  // panelOpenState = false;
  constructor(private route: ActivatedRoute, private fitnessservice: FitnessService, private router: Router) { }
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.workoutType = params.get('workoutType');
      this. getfitnessByworkouttype(this.workoutType);
    }
    );

  }
  getfitnessByworkouttype(workoutType: string) {
    throw new Error("Method not implemented.");
  }


  // tslint:disable-next-line:ban-types
  // getplaceBySeason(season: string): any {
  //   this.placeserviceService.getplaceBySeason(season).subscribe((response) =>
  //     this.allplaces = response);
  // }
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
