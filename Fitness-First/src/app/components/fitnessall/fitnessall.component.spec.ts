import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessallComponent } from './fitnessall.component';

describe('FitnessallComponent', () => {
  let component: FitnessallComponent;
  let fixture: ComponentFixture<FitnessallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
