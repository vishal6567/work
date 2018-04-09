import { Component, OnInit } from '@angular/core';
import { Report} from '../module/report';
import { ReportService } from '../services/report.service';
import { ToasteService } from '../services/toaste.service';
import { ToastsManager, } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {
  reportDetail: Report [];
  constructor(private reportService:ReportService,
    private toasteService: ToasteService,
    public toastr: ToastsManager, vcr: ViewContainerRef) {this.toastr.setRootViewContainerRef(vcr); }
    getReportDetail(): void {
      this.reportService.getReportDetail().subscribe(data => {this.reportDetail = data ; console.log(data)},
       error => console.log('Error :: ' + error)
     );
    }
    deleteReportDetail(id: any) {
      if (confirm('Are you sure you want to delete ?')) {
        this.reportService.deleteReportDetail(id).subscribe(
           data => {
             console.log('sucess', data);
             this.toasteService.success('Delete');
           },
           error => {
             console.log('Error deleting !');
             this.toasteService.Error('Delete');
           }
        );
        this.getReportDetail();
      }
    }

  ngOnInit() {
    this.getReportDetail();
  }

}
