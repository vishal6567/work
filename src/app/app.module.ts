import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ExpenseTypeComponent } from './expense-type/expense-type.component';
import {UserService} from './services/user.service';
import { ExpenseDetailService } from './services/expenseDetail.service';
import { ExpensetypeViewComponent } from './expensetype-view/expensetype-view.component';
import { expenseRouting } from './router/router.router';
import { ToasteService } from './services/toaste.service';
import { ViewContainerRef } from '@angular/core';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';
import { ExpenseDetailViewComponent } from './expense-detail-view/expense-detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseTypeComponent,
    ExpensetypeViewComponent,
    ExpenseDetailComponent,
    ExpenseDetailViewComponent
  ],
  imports: [ BrowserAnimationsModule, ToastModule.forRoot(),
  BrowserModule, FormsModule, HttpModule, expenseRouting],
  providers: [UserService, ToasteService, ExpenseDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
