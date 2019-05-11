import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantRecordPage } from './plant-record.page';

describe('PlantRecordPage', () => {
  let component: PlantRecordPage;
  let fixture: ComponentFixture<PlantRecordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantRecordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantRecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
