import { Injectable } from '@angular/core';
import { ToastsManager, } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';


@Injectable()
export class ToasteService {

  constructor(public toastr: ToastsManager
               ) {
             }
  success(msg) {
    this.toastr.success(msg, 'You are awesome!', 'Success!');
   }
   Error() {
    this.toastr.error('This is not good!', 'Oops!');
  }

}
