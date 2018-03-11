import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridDemoComponentComponent } from './datagrid-demo-component.component';

describe('DatagridDemoComponentComponent', () => {
  let component: DatagridDemoComponentComponent;
  let fixture: ComponentFixture<DatagridDemoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatagridDemoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagridDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
