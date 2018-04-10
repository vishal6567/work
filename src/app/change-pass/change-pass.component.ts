import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChangePassService } from '../services/changepass.service';
import { Pass } from '../module/pass';
import { ToasteService } from '../services/toaste.service';

import { ToastsManager, } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {
  pass: Pass[] = [];
  register: any = {};
  constructor(private changePassService: ChangePassService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toasteService: ToasteService,
    public toastr: ToastsManager, vcr: ViewContainerRef ) { this.toastr.setRootViewContainerRef(vcr); }
    createPass() {
      this.changePassService.createPass(this.register).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/']);
        },
        error => {
          console.log('error add');
          this.toasteService.Error('Expense Detail Add');
        }
      );
    }
    getPass(): void {
      this.changePassService.getPass()
          .subscribe(
              resultArray => { this.pass = resultArray; },
              error => console.log('Error :: ' + error)
          ); }
  ngOnInit() {
    this.getPass();
  }

}
