import { Injectable } from '@angular/core';
import { ToastsManager, } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';


@Injectable()
export class ToasteService {
private KeepAfterRouteChange = false;
  constructor(public toastr: ToastsManager
               ) {
             }
  success(msg, KeepAfterRouteChange = false) {
    this.toastr.success(msg, 'Success', '');
   }
   Error(msg) {
    this.toastr.error('This is not good!', 'Oops!', {toastLife: 10000});
  }
  Warning(msg) {
    this.toastr.warning('You are being warned.', 'Alert!');
  }
  Info(msg) {
    this.toastr.info('Just some information for you.', '');
  }
  Custom(msg) {
    this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
  }

}
