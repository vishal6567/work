import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ViewContainerRef } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ExpenseTypeComponent } from './expense-type/expense-type.component';
import { ExpensetypeViewComponent } from './expensetype-view/expensetype-view.component';
import { expenseRouting } from './router/router.router';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';
import { ExpenseDetailViewComponent } from './expense-detail-view/expense-detail-view.component';
import { ExpenseDetailEditComponent } from './expense-detail-edit/expense-detail-edit.component';
import { ReportComponent } from './report/report.component';

import { AuthService } from './services/auth.service';
import { ToasteService } from './services/toaste.service';
import { UserService } from './services/user.service';
import { ExpenseDetailService } from './services/expenseDetail.service';
import { ReportService } from './services/report.service';
import { ChangePassService } from './services/changepass.service';
import { ReportViewComponent } from './report-view/report-view.component';
import { ReportEditComponent } from './report-edit/report-edit.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guards';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    ExpenseTypeComponent,
    ExpensetypeViewComponent,
    ExpenseDetailComponent,
    ExpenseDetailViewComponent,
    ExpenseDetailEditComponent,
    ReportComponent,
    ReportViewComponent,
    ReportEditComponent,
    NavBarComponent,
    LoginComponent,
    ChangePassComponent,
    HomeComponent
  ],
  imports: [ BrowserAnimationsModule, HttpClientModule, Ng2SearchPipeModule, ToastModule.forRoot(),
  BrowserModule, FormsModule, HttpModule, expenseRouting],
  providers: [UserService, ChangePassService, ToasteService, ExpenseDetailService, ReportService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
