import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAircraftComponent } from './details-aircraft.component';

describe('DetailsAircraftComponent', () => {
  let component: DetailsAircraftComponent;
  let fixture: ComponentFixture<DetailsAircraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAircraftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAircraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
