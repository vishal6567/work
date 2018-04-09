import { Component, OnInit } from '@angular/core';
import { Report} from '../module/report';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  reportDetail: Report [];
  constructor(private reportService: ReportService ) { }
  getReportDetail(): void {
    this.reportService.getReportDetail().subscribe(data => {this.reportDetail = data ; console.log(data)},
     error => console.log('Error :: ' + error)
   );
  }
  ngOnInit() {
    this.getReportDetail();
  }

}
