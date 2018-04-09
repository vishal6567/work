import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReportService } from '../services/report.service';
import { Detail } from '../module/expense-detail';
import { ToasteService } from '../services/toaste.service';


import { ToastsManager, } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit, OnDestroy {
  expensetype: Detail[] = [];
  register: any = {} ;
  constructor(private reportService: ReportService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toasteService: ToasteService,
    public toastr: ToastsManager, vcr: ViewContainerRef) { this.toastr.setRootViewContainerRef(vcr); }
    getExpensetype(): void {
    this.reportService.getExpensetype()
       .subscribe(
        resultArray => { this.expensetype = resultArray; },
       error => console.log('Error :: ' + error)
        );
    }
    createReport() {
      this.reportService.createReport(this.register)
      .subscribe(data => {
        console.log('data', data);
       this.router.navigate(['/report-view']);
     },
        error => { console.log('error'); } );
    }
  ngOnInit() {
    this. getExpensetype();
  }
  ngOnDestroy() {
    this.toasteService.success('Report Detail Add');
  }
}
