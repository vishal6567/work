import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ExpenseTypeComponent } from './expense-type/expense-type.component';
import {UserService} from './services/user.service';
import { ExpensetypeViewComponent } from './expensetype-view/expensetype-view.component';
import { expenseRouting } from './router/router.router';
import { ToasteService } from './services/toaste.service';
import { ViewContainerRef } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseTypeComponent,
    ExpensetypeViewComponent
  ],
  imports: [ BrowserAnimationsModule, ToastModule.forRoot(),
  BrowserModule, FormsModule, HttpModule, expenseRouting],
  providers: [UserService, ToasteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
