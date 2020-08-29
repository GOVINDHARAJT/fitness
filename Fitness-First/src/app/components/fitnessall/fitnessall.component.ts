import { Component, OnInit } from '@angular/core';
import {Fitness} from './../../model/fitness';
import { ActivatedRoute, Router } from '@angular/router';
import { FitnessService } from 'src/app/service/fitness.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fitnessall',
  templateUrl: './fitnessall.component.html',
  styleUrls: ['./fitnessall.component.css']
})
export class FitnessallComponent implements OnInit {
  
  allfitness: Fitness[];
  // latitude: number;
  // longitude: number;
  // tslint:disable-next-line:ban-types
  // season: String;
  // locationChosen = false;
   hidden = false;
   panelOpenState = false;
  constructor(private route: ActivatedRoute, private fitnessService: FitnessService,
              private router: Router, config: NgbCarouselConfig) {
      // customize default values of carousels used by this component tree
      config.interval = 2000;
      config.wrap = true;
      config.keyboard = false;
      config.pauseOnHover = true;
    }
  ngOnInit(): void {
    this.getAllFitness();
  }


  // tslint:disable-next-line:ban-types
  getAllFitness(): any {
    this.fitnessService.getAllFitness().subscribe((response) =>
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
  // onClick(fitnessId: number): any {
  //   this.router.navigate(['fitnessSingleCard',fitnessId]);
  // }

}
