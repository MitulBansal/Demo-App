import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputgroupDemoComponentComponent } from './inputgroup-demo-component.component';

describe('InputgroupDemoComponentComponent', () => {
  let component: InputgroupDemoComponentComponent;
  let fixture: ComponentFixture<InputgroupDemoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputgroupDemoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputgroupDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
