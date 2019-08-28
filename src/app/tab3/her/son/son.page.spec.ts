import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonPage } from './son.page';

describe('SonPage', () => {
  let component: SonPage;
  let fixture: ComponentFixture<SonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
