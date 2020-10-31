import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalButtonsComponent } from './operational-buttons.component';

describe('OperationalButtonsComponent', () => {
  let component: OperationalButtonsComponent;
  let fixture: ComponentFixture<OperationalButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationalButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationalButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
