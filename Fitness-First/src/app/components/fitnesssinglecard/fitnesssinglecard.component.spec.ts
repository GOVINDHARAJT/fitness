import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnesssinglecardComponent } from './fitnesssinglecard.component';

describe('FitnesssinglecardComponent', () => {
  let component: FitnesssinglecardComponent;
  let fixture: ComponentFixture<FitnesssinglecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnesssinglecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnesssinglecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
