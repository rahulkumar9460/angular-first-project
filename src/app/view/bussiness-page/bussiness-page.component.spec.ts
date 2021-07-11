import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessPageComponent } from './bussiness-page.component';

describe('BussinessPageComponent', () => {
  let component: BussinessPageComponent;
  let fixture: ComponentFixture<BussinessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussinessPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
