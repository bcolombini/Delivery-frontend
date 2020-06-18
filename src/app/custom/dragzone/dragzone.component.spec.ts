import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragzoneComponent } from './dragzone.component';

describe('DragzoneComponent', () => {
  let component: DragzoneComponent;
  let fixture: ComponentFixture<DragzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragzoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
