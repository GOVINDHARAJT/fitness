import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessbyworkoutsubtypeComponent } from './fitnessbyworkoutsubtype.component';

describe('FitnessbyworkoutsubtypeComponent', () => {
  let component: FitnessbyworkoutsubtypeComponent;
  let fixture: ComponentFixture<FitnessbyworkoutsubtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessbyworkoutsubtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessbyworkoutsubtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
