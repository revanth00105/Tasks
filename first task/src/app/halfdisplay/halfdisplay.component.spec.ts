import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfdisplayComponent } from './halfdisplay.component';

describe('HalfdisplayComponent', () => {
  let component: HalfdisplayComponent;
  let fixture: ComponentFixture<HalfdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalfdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
