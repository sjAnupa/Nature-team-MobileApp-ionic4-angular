import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdRecordPage } from './bird-record.page';

describe('BirdRecordPage', () => {
  let component: BirdRecordPage;
  let fixture: ComponentFixture<BirdRecordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdRecordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdRecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
