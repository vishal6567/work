import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Type } from '../module/expensetype';
import { ToasteService } from '../services/toaste.service';
import { ToastsManager, } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
@Component({
  selector: 'app-expensetype-view',
  templateUrl: './expensetype-view.component.html',
  styleUrls: ['./expensetype-view.component.css']
})
export class ExpensetypeViewComponent implements OnInit {
  expensetype: Type[];
  constructor(private userService: UserService,
              private toasteService: ToasteService,
              public toastr: ToastsManager, vcr: ViewContainerRef) {
                this.toastr.setRootViewContainerRef(vcr)}
  getExpensetype(): void {
    this.userService.getExpensetype()
        .subscribe(
            resultArray => { this.expensetype = resultArray; },
            error => console.log('Error :: ' + error)
          );
  }
  deleteExpensetype(expensetype: any) {
    if (confirm('Are you sure you want to delete ?')) {
      this.userService.deleteExpensetype(expensetype).subscribe(
         data => {
           console.log('sucess', data);
           this.toasteService.success('wdedw');
         },
         error => {
           console.log('Error deleting employee!');
         }
      );
      this.getExpensetype();
    }
  }

  ngOnInit() {
    this.toasteService.success('dwadqd');
    this.getExpensetype();
  }

}
