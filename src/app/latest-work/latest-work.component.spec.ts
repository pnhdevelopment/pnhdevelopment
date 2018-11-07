import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestWorkComponent } from './latest-work.component';

describe('LatestWorkComponent', () => {
  let component: LatestWorkComponent;
  let fixture: ComponentFixture<LatestWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
