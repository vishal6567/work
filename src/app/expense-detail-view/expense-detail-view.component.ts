import { Component, OnInit } from '@angular/core';
import { ExpenseDetailService } from '../services/expenseDetail.service';
import { Detail } from '../module/expense-detail';
import { ToasteService } from '../services/toaste.service';
import { ToastsManager, } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
@Component({
  selector: 'app-expense-detail-view',
  templateUrl: './expense-detail-view.component.html',
  styleUrls: ['./expense-detail-view.component.css']
})
export class ExpenseDetailViewComponent implements OnInit {
  expenseDetail: Detail [];
  constructor(private expenseDetailService: ExpenseDetailService, private toasteService: ToasteService,
    public toastr: ToastsManager, vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
     }
     getExpenseDetail(): void {
       this.expenseDetailService.getExpenseDetail().subscribe(data => {this.expenseDetail = data ; console.log(data)},
        error => console.log('Error :: ' + error)
      );
     }
     deleteExpenseDetail(id: any) {
      if (confirm('Are you sure you want to delete ?')) {
        this.expenseDetailService.deleteExpenseDetail(id).subscribe(
           data => {
             console.log('sucess', data);
             this.toasteService.success('Delete');
           },
           error => {
             console.log('Error deleting !');
             this.toasteService.Error('Delete');
           }
        );
        this.getExpenseDetail();
      }
    }

  ngOnInit() {
    this.getExpenseDetail();
  }

}
