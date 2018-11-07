import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TickBoxesComponent } from './tick-boxes.component';

describe('TickBoxesComponent', () => {
  let component: TickBoxesComponent;
  let fixture: ComponentFixture<TickBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TickBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TickBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
