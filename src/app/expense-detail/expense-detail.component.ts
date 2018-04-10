import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ExpenseDetailService } from '../services/expenseDetail.service';
import { Type } from '../module/expensetype';
import { ToasteService } from '../services/toaste.service';

import { ToastsManager, } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.css']
})
export class ExpenseDetailComponent implements OnInit, OnDestroy {
  expensetype: Type[] = [];
  register: any = {} ;
  constructor(private expenseDetailService: ExpenseDetailService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toasteService: ToasteService,
    public toastr: ToastsManager, vcr: ViewContainerRef) {this.toastr.setRootViewContainerRef(vcr); }
  getExpensetype(): void {
    this.expenseDetailService.getExpensetype()
        .subscribe(
            resultArray => { this.expensetype = resultArray; },
            error => console.log('Error :: ' + error)
          );
  }
  createExpenseDetail() {
    this.expenseDetailService.createExpenseDetail(this.register)
    .subscribe(data => {
      console.log('data', data);
      this.router.navigate(['/expense-detail-view']);
   },
      error => { console.log('error'); } );
      this.toasteService.Error('Expense Detail Add');
  }
  ngOnInit() {
    this.getExpensetype();
  }
  ngOnDestroy() {
    this.toasteService.success('Expense Detail Add');
  }

}
