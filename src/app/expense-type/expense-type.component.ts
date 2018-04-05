import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { Type } from '../module/expensetype';
import { ToasteService } from '../services/toaste.service';

import { ToastsManager, } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-expense-type',
  templateUrl: './expense-type.component.html',
  styleUrls: ['./expense-type.component.css']
})
export class ExpenseTypeComponent implements OnInit, OnDestroy {
  register: any = {};

  constructor(private userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private toasteService: ToasteService,
              public toastr: ToastsManager, vcr: ViewContainerRef) {
                this.toastr.setRootViewContainerRef(vcr)}
  createExpensetype() {
    this.userService.createExpensetype(this.register)
    .subscribe( data => {
      console.log('data', data);
      this.router.navigate(['/expensetypeview']);
   },
      error => { console.log('error'); } );
    }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.toasteService.success('Expense Type Add');
  }

}
