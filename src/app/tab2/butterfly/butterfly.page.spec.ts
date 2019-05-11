import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButterflyPage } from './butterfly.page';

describe('ButterflyPage', () => {
  let component: ButterflyPage;
  let fixture: ComponentFixture<ButterflyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButterflyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButterflyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
