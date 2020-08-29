import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessbyratingComponent } from './fitnessbyrating.component';

describe('FitnessbyratingComponent', () => {
  let component: FitnessbyratingComponent;
  let fixture: ComponentFixture<FitnessbyratingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessbyratingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessbyratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
