import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessbytypeComponent } from './fitnessbytype.component';

describe('FitnessbytypeComponent', () => {
  let component: FitnessbytypeComponent;
  let fixture: ComponentFixture<FitnessbytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessbytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessbytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
