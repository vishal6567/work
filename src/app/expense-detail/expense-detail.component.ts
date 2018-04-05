import { Component, OnInit } from '@angular/core';
import { ExpenseDetailService } from '../services/expenseDetail.service';
import { Type } from '../module/expensetype';
@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.css']
})
export class ExpenseDetailComponent implements OnInit {
  expensetype: Type[] = [];
  constructor(private expenseDetailService: ExpenseDetailService) { }
  getExpensetype(): void {
    this.expenseDetailService.getExpensetype()
        .subscribe(
            resultArray => { this.expensetype = resultArray; },
            error => console.log('Error :: ' + error)
          );
  }

  ngOnInit() {
    this.getExpensetype()
  }

}
