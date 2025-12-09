import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Allcustomer } from './allcustomer';

describe('Allcustomer', () => {
  let component: Allcustomer;
  let fixture: ComponentFixture<Allcustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Allcustomer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Allcustomer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
