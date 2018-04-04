import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensetypeViewComponent } from './expensetype-view.component';

describe('ExpensetypeViewComponent', () => {
  let component: ExpensetypeViewComponent;
  let fixture: ComponentFixture<ExpensetypeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensetypeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensetypeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
