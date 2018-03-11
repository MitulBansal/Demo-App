import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyFilterDemoComponent } from './key-filter-demo.component';

describe('KeyFilterDemoComponent', () => {
  let component: KeyFilterDemoComponent;
  let fixture: ComponentFixture<KeyFilterDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyFilterDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyFilterDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
