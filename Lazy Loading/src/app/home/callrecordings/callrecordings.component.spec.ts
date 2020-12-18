import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallrecordingsComponent } from './callrecordings.component';

describe('CallrecordingsComponent', () => {
  let component: CallrecordingsComponent;
  let fixture: ComponentFixture<CallrecordingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallrecordingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallrecordingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
