import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingAndDataComponent } from './event-binding-and-data.component';

describe('EventBindingAndDataComponent', () => {
  let component: EventBindingAndDataComponent;
  let fixture: ComponentFixture<EventBindingAndDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBindingAndDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBindingAndDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
