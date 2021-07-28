import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeBeanComponent } from './coffee-bean.component';

describe('CoffeeBeanComponent', () => {
  let component: CoffeeBeanComponent;
  let fixture: ComponentFixture<CoffeeBeanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeBeanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeBeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
