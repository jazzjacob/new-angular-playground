import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonThingyComponent } from './button-thingy.component';

describe('ButtonThingyComponent', () => {
  let component: ButtonThingyComponent;
  let fixture: ComponentFixture<ButtonThingyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonThingyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonThingyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
