import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsEmployeesComponent } from './groups-employees.component';

describe('GroupsEmployeesComponent', () => {
  let component: GroupsEmployeesComponent;
  let fixture: ComponentFixture<GroupsEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
