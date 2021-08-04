import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeebeanTableComponent } from './coffeebean-table.component';

describe('CoffeebeanTableComponent', () => {
  let component: CoffeebeanTableComponent;
  let fixture: ComponentFixture<CoffeebeanTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeebeanTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeebeanTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
