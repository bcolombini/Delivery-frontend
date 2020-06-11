import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveriesHistoryComponent } from './deliveries-history.component';

describe('DeliveriesHistoryComponent', () => {
  let component: DeliveriesHistoryComponent;
  let fixture: ComponentFixture<DeliveriesHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveriesHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveriesHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
