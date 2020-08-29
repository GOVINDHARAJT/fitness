import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessbydurationComponent } from './fitnessbyduration.component';

describe('FitnessbydurationComponent', () => {
  let component: FitnessbydurationComponent;
  let fixture: ComponentFixture<FitnessbydurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessbydurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessbydurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
