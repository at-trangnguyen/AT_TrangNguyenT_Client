import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLikeComponent } from './btn-like.component';

describe('BtnLikeComponent', () => {
  let component: BtnLikeComponent;
  let fixture: ComponentFixture<BtnLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
