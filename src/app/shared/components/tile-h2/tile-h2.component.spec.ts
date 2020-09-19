import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileH2Component } from './tile-h2.component';

describe('TileH2Component', () => {
  let component: TileH2Component;
  let fixture: ComponentFixture<TileH2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileH2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileH2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
