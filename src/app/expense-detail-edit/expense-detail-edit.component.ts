import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ExpenseDetailService } from '../services/expenseDetail.service';
import { Detail } from '../module/expense-detail';
import { Type } from '../module/expensetype';
import { ToasteService } from '../services/toaste.service';

import { ToastsManager, } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
@Component({
  selector: 'app-expense-detail-edit',
  templateUrl: './expense-detail-edit.component.html',
  styleUrls: ['./expense-detail-edit.component.css']
})
export class ExpenseDetailEditComponent implements OnInit,OnDestroy {
  expenses: Detail[];
  expense: Detail;
  expensetype: Type[] = [];
  etid: number;
  etexpense_type: any;
  etcreate_date: any;
  etvendor_name: string;
  etamount: number;
  etdomestic: string;
  etbusiness_purpos: string;
  etcity_state: string;
  etdeparment: string;
  etpayment: any;
  etcomment: any;
  constructor(private expenseDetailService: ExpenseDetailService,
              private router: Router, private route: ActivatedRoute,
              private toasteService: ToasteService,
              public toastr: ToastsManager, vcr: ViewContainerRef ) {  this.toastr.setRootViewContainerRef(vcr); }
getExpensetype(): void {
    this.expenseDetailService.getExpensetype()
     .subscribe(
     resultArray => { this.expensetype = resultArray; },
        error => console.log('Error :: ' + error)
        );
}
updateExpenseDetail(editExpense, id) {
  const update = {
    etexpense_type: this.etexpense_type,
    create_date: this.etcreate_date,
    vendor_name: this.etvendor_name,
    amount: this.etamount,
    domestic: this.etdomestic,
    business_purpos: this.etbusiness_purpos,
    city_state: this.etcity_state,
    deparment: this.etdeparment,
    payment: this.etpayment,
    comment: this.etcomment,
  };
  this.expenseDetailService.updateExpenseDetail(update, id).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/expense-detail-view']);
      },
      error => {
        console.error('Error updating employee!');
        }
    );
}

  ngOnInit() {
    this.getExpensetype();
    var id = this.route.params.subscribe(params => {
      var id = params['id'];
      if (id) {
        this.expenseDetailService.getExpenseId(id)
        .subscribe(
          data => { this.expenses = data,
          this.etexpense_type =  data[0].expense_type,
          this.etcreate_date = data[0].create_date,
          this.etvendor_name = data[0].vendor_name,
          this.etamount = data[0].amount,
          this.etdomestic = data[0].domestic,
          this.etbusiness_purpos = data[0].business_purpos,
          this.etcity_state = data[0].city_state,
          this.etdeparment = data[0].deparment,
          this.etpayment = data[0].payment,
          this.etcomment = data[0].comment,
          this.expenses.push(this.expense = data[0]);
        });
        this.etid = id;
      }
    });
  }
  ngOnDestroy() {
    this.toasteService.success('Expense Detail Update');
  }


}
