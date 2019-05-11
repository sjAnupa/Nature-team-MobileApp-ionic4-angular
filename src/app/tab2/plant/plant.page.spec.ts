import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantPage } from './plant.page';

describe('PlantPage', () => {
  let component: PlantPage;
  let fixture: ComponentFixture<PlantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
