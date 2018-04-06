import { Routes, RouterModule } from '@angular/router';
import { ExpenseTypeComponent } from '../expense-type/expense-type.component';
import { ExpensetypeViewComponent } from '../expensetype-view/expensetype-view.component';
import { ExpenseDetailComponent } from '../expense-detail/expense-detail.component';
import { ExpenseDetailViewComponent} from '../expense-detail-view/expense-detail-view.component';
import { ExpenseDetailEditComponent } from '../expense-detail-edit/expense-detail-edit.component';

const expenseRoutes: Routes = [
    { path: '', component: ExpenseTypeComponent, pathMatch: 'full' },
    { path: 'expensetypeview', component: ExpensetypeViewComponent, pathMatch: 'full' },
    { path: 'expense-detail', component: ExpenseDetailComponent, pathMatch: 'full' },
    { path: 'expense-detail-view', component: ExpenseDetailViewComponent, pathMatch: 'full' },
    { path: 'expense-detail-id/:id', component: ExpenseDetailEditComponent, pathMatch: 'full' }
];
export const expenseRouting = RouterModule.forRoot(expenseRoutes);