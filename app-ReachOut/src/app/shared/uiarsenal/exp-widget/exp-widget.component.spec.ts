import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpWidgetComponent } from './exp-widget.component';

describe('ExpWidgetComponent', () => {
  let component: ExpWidgetComponent;
  let fixture: ComponentFixture<ExpWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
