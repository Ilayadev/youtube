import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstimeComponent } from './viewstime.component';

describe('ViewstimeComponent', () => {
  let component: ViewstimeComponent;
  let fixture: ComponentFixture<ViewstimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewstimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewstimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
