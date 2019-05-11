import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButterflyRecordPage } from './butterfly-record.page';

describe('ButterflyRecordPage', () => {
  let component: ButterflyRecordPage;
  let fixture: ComponentFixture<ButterflyRecordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButterflyRecordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButterflyRecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
