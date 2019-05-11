import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonflyPage } from './dragonfly.page';

describe('DragonflyPage', () => {
  let component: DragonflyPage;
  let fixture: ComponentFixture<DragonflyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonflyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonflyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
