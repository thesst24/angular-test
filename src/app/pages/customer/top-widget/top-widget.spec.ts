import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopWidget } from './top-widget';

describe('TopWidget', () => {
  let component: TopWidget;
  let fixture: ComponentFixture<TopWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
