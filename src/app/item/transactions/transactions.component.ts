import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemServiceService } from '../item-service.service';
import { Item } from '../Item';
import { Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { merge, Observable } from 'rxjs';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  items: Item[];
  displayedColumns: string[] = ['date', 'description', 'withdraw', 'deposit', 'balance', 'edit', 'delete'];

  dataSource: Observable<Item[]>;
  resultsLength = 0;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private itemService: ItemServiceService) {} 

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(data => this.items = data);
  }

  getTransactions(id: number, descrption: string, withdraw: number, deposit: number, balance: number): Observable<Item[]> {
    return this.itemService.getItems();
  }
}
