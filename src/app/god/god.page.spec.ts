import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GodPage } from './god.page';

describe('GodPage', () => {
  let component: GodPage;
  let fixture: ComponentFixture<GodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
