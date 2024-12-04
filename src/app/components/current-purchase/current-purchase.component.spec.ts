import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPurchaseComponent } from './current-purchase.component';

describe('CurrentPurchaseComponent', () => {
  let component: CurrentPurchaseComponent;
  let fixture: ComponentFixture<CurrentPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentPurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
