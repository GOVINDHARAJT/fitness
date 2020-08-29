import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessbyworkoutypeComponent } from './fitnessbyworkoutype.component';

describe('FitnessbyworkoutypeComponent', () => {
  let component: FitnessbyworkoutypeComponent;
  let fixture: ComponentFixture<FitnessbyworkoutypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessbyworkoutypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessbyworkoutypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
