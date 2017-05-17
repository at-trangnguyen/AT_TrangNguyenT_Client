import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTagComponent } from './popular-tag.component';

describe('PopularTagComponent', () => {
  let component: PopularTagComponent;
  let fixture: ComponentFixture<PopularTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
