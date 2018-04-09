import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReportService } from '../services/report.service';
import { Report } from '../module/report';
import { Detail } from '../module/expense-detail';
import { ToasteService } from '../services/toaste.service';
import { ExpenseDetailService }  from '../services/expenseDetail.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { Type } from '../module/expensetype';
@Component({
  selector: 'app-report-edit',
  templateUrl: './report-edit.component.html',
  styleUrls: ['./report-edit.component.css']
})
export class ReportEditComponent implements OnInit,OnDestroy {
  reports: Report[];
  report: Report;
  expensetype: Type[] = [];
  etid: number;
  etexpense_type: any;
  etcreate_date: any;
  etreport_date: any;
  etamount: number;
  etbusiness_purpos: string;
  etinvoice: any;
  etpayment: any;
  etcomment: any;
  constructor(private router: Router, private route: ActivatedRoute,
    private toasteService: ToasteService,
    public toastr: ToastsManager, vcr: ViewContainerRef,
    private reportService: ReportService,private expenseDetailService:ExpenseDetailService ) {this.toastr.setRootViewContainerRef(vcr); }
    getExpensetype(): void {
      this.expenseDetailService.getExpensetype()
       .subscribe(
       resultArray => { this.expensetype = resultArray; },
          error => console.log('Error :: ' + error)
          );
  }
  updateReportDetail(editReport, id) {
    const update = {
      etexpense_type: this.etexpense_type,
      create_date: this.etcreate_date,
      report: this.etreport_date,
      amount: this.etamount,
      invoice: this.etinvoice,
      business_purpos: this.etbusiness_purpos,
      payment: this.etpayment,
      comment: this.etcomment,
    };
    this.reportService.updateReportDetail(update, id).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/report-view']);
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
        this.reportService.getReportId(id)
        .subscribe(
          data => { this.reports = data,
          this.etexpense_type =  data[0].expense_type,
          this.etcreate_date = data[0].create_date,
          this.etreport_date = data[0].report_date,
          this.etamount = data[0].amount,
          this.etinvoice = data[0].invoice,
          this.etbusiness_purpos = data[0].business_purpos,
          this.etpayment = data[0].payment,
          this.etcomment = data[0].comment,
          this.reports.push(this.report = data[0]);
        });
        this.etid = id;
      }
    });
  }
  ngOnDestroy() {
    this.toasteService.success('Report Detail Update');
  }

}
