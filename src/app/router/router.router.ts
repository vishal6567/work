import { Routes, RouterModule } from '@angular/router';
import { ExpenseTypeComponent } from '../expense-type/expense-type.component';
import { ExpensetypeViewComponent } from '../expensetype-view/expensetype-view.component';
import { ExpenseDetailComponent } from '../expense-detail/expense-detail.component';
import { ExpenseDetailViewComponent} from '../expense-detail-view/expense-detail-view.component';
import { ExpenseDetailEditComponent } from '../expense-detail-edit/expense-detail-edit.component';
import { ReportComponent } from '../report/report.component';
import { ReportViewComponent } from '../report-view/report-view.component';
import { ReportEditComponent} from '../report-edit/report-edit.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../guards/auth.guards';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { LogoutComponent } from '../logout/logout.component';
const expenseRoutes: Routes = [
    { path: '', component: LoginComponent, pathMatch: 'full' },
    { path: 'expensetype', component: ExpenseTypeComponent, canActivate: [AuthGuard], pathMatch: 'full' },
    { path: 'expensetypeview', component: ExpensetypeViewComponent, canActivate: [AuthGuard], pathMatch: 'full' },
    { path: 'expense-detail', component: ExpenseDetailComponent, canActivate: [AuthGuard], pathMatch: 'full' },
    { path: 'expense-detail-view', component: ExpenseDetailViewComponent, canActivate: [AuthGuard], pathMatch: 'full' },
    { path: 'expense-detail-id/:id', component: ExpenseDetailEditComponent, canActivate: [AuthGuard], pathMatch: 'full' },
    { path: 'report', component: ReportComponent, canActivate: [AuthGuard], pathMatch: 'full' },
    { path: 'report-view', component: ReportViewComponent, canActivate: [AuthGuard], pathMatch: 'full' },
    { path: 'report-detail-id/:id', component: ReportEditComponent, canActivate: [AuthGuard], pathMatch: 'full' },
    { path: 'nav-bar', component: NavBarComponent, canActivate: [AuthGuard], pathMatch: 'full' },
    { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard], pathMatch: 'full' }
];
export const expenseRouting = RouterModule.forRoot(expenseRoutes);