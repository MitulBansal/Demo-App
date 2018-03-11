import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarDemoComponent } from './menu-bar-demo.component';

describe('MenuBarDemoComponent', () => {
  let component: MenuBarDemoComponent;
  let fixture: ComponentFixture<MenuBarDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBarDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
