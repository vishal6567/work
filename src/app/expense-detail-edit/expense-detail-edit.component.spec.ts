import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseDetailEditComponent } from './expense-detail-edit.component';

describe('ExpenseDetailEditComponent', () => {
  let component: ExpenseDetailEditComponent;
  let fixture: ComponentFixture<ExpenseDetailEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseDetailEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
