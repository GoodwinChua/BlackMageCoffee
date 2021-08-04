import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeBeanAccordionComponent } from './coffee-bean-accordion.component';

describe('CoffeeBeanAccordionComponent', () => {
  let component: CoffeeBeanAccordionComponent;
  let fixture: ComponentFixture<CoffeeBeanAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeBeanAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeBeanAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
