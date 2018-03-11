import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDemoComponentComponent } from './button-demo-component.component';

describe('ButtonDemoComponentComponent', () => {
  let component: ButtonDemoComponentComponent;
  let fixture: ComponentFixture<ButtonDemoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonDemoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
