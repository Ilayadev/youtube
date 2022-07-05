import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgTagComponent } from './img-tag.component';

describe('ImgTagComponent', () => {
  let component: ImgTagComponent;
  let fixture: ComponentFixture<ImgTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
