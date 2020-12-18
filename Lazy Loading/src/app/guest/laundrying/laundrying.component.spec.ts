import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaundryingComponent } from './laundrying.component';

describe('LaundryingComponent', () => {
  let component: LaundryingComponent;
  let fixture: ComponentFixture<LaundryingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaundryingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaundryingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
