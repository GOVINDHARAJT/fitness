import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  test: any[] = [
    [
      '../../../assets/workout.jpg',
      '../../../assets/boxing.jpg',
      '../../../assets/yoga.jpg',
      '../../../assets/Dance.jpg',
    ],
    // [
    //   ' ../../../assets/slider/nokia.jpg',
    //   '../../../assets/slider/oppo.png',
    //   '../../../assets/slider/blackberry.png',
    //   '../../../assets/slider/honor.jpg',
    //   '../../../assets/slider/sony.png',
    // ],
  ];

  images2: any[] = [
    [
      {
        value:
        '../../../assets/workout.jpg',
        id: 0,
      },
      {
        value: '../../../assets/boxing.jpg',
        id: 1,
      },
      {
        value: '../../../assets/yoga.jpg',
        id: 2,
      },
      {
        value:
          '../../../assets/Dance.jpg',
        id: 3,
      },
      // {
      //   value: '../../../assets/slider/samsung.png',
      //   id: 4,
      // },
    /*   {
        value: '../../../assets/slider/ancient.jpg',
        id: 5,
      },
      {
        value: '../../../assets/slider/seas.jpg',
        id: 6,
      },
      {
        value: '../../../assets/slider/parks.jpg',
        id: 7,
      },
      {
        value: '../../../assets/slider/water.jpg',
        id: 8,
      }, */
    ],
    // [
    //   {
    //     value: '../../../assets/slider/nokia.jpg',
    //     id: 0,
    //   },
    //   {
    //     value: '../../../assets/slider/oppo.png',
    //     id: 1,
    //   },
    //   {
    //     value: '../../../assets/slider/blackberry.png',
    //     id: 2,
    //   },
    //   {
    //     value: '../../../assets/slider/honor.jpg',
    //     id: 3,
    //   },
    //   {
    //     value: '../../../assets/slider/sony.png',
    //     id: 4,
    //   },
    // ],
  ];
  // test: any[] = [
  //   // [
  //   //   '../../../assets/slider/hills.jpg',
  //   //   '../../../assets/slider/historical.jpg',
  //   //   '../../../assets/slider/temple.jpg',
  //   //   '../../../assets/slider/parks.jpg',
  //   //   '../../../assets/slider/holiday.jpg',
  //    /*  '../../../assets/slider/island.jpg',
  //     '../../../assets/slider/ancient.jpg',
  //     '../../../assets/slider/seas.jpg',
  //     '../../../assets/slider/parks.jpg',
  //     '../../../assets/slider/water.jpg',  ],*/  
  //   [
      // '../../../assets/workout.jpg',
      // '../../../assets/boxing.jpg',
      // '../../../assets/yoga.jpg',
      // '../../../assets/Dance.jpg',
     
  //   ],
  // ];

  // images2: any[] = [
    // [
      // {
      //   value:
      //     '../../../assets/slider/hills.jpg',
      //   id: 0,
      // },
      // {
      //   value: '../../../assets/slider/historical.jpg',
      //   id: 1,
      // },
      // {
      //   value: '../../../assets/slider/temple.jpg',
      //   id: 2,
      // },
      // {
      //   value:
      //     '../../../assets/slider/parks.jpg',
      //   id: 3,
      // },
      // {
      //   value: '../../../assets/slider/holiday.jpg',
      //   id: 4,
      // },
    /*   {
        value: '../../../assets/slider/ancient.jpg',
        id: 5,
      },
      {
        value: '../../../assets/slider/seas.jpg',
        id: 6,
      },
      {
        value: '../../../assets/slider/parks.jpg',
        id: 7,
      },
      {
        value: '../../../assets/slider/water.jpg',
        id: 8,
      }, */
    // ],
  //   [
  //     {
  //       value: '../../../assets/workout.jpg',
  //       id: 0,
  //     },
  //     {
  //       value: '../../../assets/boxing.jpg',
  //       id: 1,
  //     },
  //     {
  //       value: '../../../assets/yoga.jpg',
  //       id: 2,
  //     },
  //     {
  //       value: '../../../assets/Dance.jpg',
  //       id: 3,
  //     },
  //     {
  //       value: '../../../assets/machine.jpg',
  //       id: 4,
  //     },
     
  //   ],
  // ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void { }

  yourfunctionName(workoutType: String): any {
    this.router.navigate(
      [{ outlets: { tripsOutlet: ['fitnessbyworkoutType', workoutType] } }],
      { relativeTo: this.route }
    );
  }

  next(id: any) {
    this.test[id] = [];
    console.log('time1');
    for (let i = 0; i < 5; i++) {
      let x = this.images2[id][i].id + 1;
      if (x < 5) {
        this.test[id].unshift(this.images2[id][x].value);
        this.images2[id][i].id = x;
      } else {
        let y = (x % 4) - 1;
        console.log(y);
        this.images2[id][i].id = y;
        this.test[id].unshift(this.images2[id][y].value);
      }
    }
  }

  previous(id: any) {
    this.test[id] = [];
    for (let i = 0; i < 5; i++) {
      let x = this.images2[id][i].id + 1;
      if (x < 5) {
        this.test[id].unshift(this.images2[id][x].value);
        this.images2[id][i].id = x;
      } else {
        let y = (x % 4) - 1;
        console.log(y);
        this.images2[id][i].id = y;
        this.test[id].unshift(this.images2[id][y].value);
      }
    }
  }

  onClickImage(): void {
    this.router.navigate(['fitness']);
  }
}
