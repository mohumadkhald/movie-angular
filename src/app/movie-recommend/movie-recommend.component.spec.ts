/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MovieRecommendComponent } from './movie-recommend.component';

describe('MovieRecommendComponent', () => {
  let component: MovieRecommendComponent;
  let fixture: ComponentFixture<MovieRecommendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieRecommendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
