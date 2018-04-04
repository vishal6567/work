import { Routes, RouterModule } from '@angular/router';
import { ExpenseTypeComponent } from '../expense-type/expense-type.component';
import { ExpensetypeViewComponent } from '../expensetype-view/expensetype-view.component';
const expenseRoutes: Routes = [
    { path: '', component: ExpenseTypeComponent, pathMatch: 'full' },
    { path: 'expensetypeview', component: ExpensetypeViewComponent, pathMatch: 'full' }
];
export const expenseRouting = RouterModule.forRoot(expenseRoutes);