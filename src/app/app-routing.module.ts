import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './item/add-item/add-item.component';
import { TransactionsComponent } from './item/transactions/transactions.component';
import { BillComponent } from './bill/bill.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {path: '', component: SummaryComponent},
  {path: 'add-item', component: AddItemComponent},
  {path: 'transactions', component: TransactionsComponent},
  {path: 'bills', component: BillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
