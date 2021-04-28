import { Component, OnInit, Injectable } from '@angular/core';
import { ItemServiceService } from '../item/item-service.service';
import { BillService } from '../bill/bill.service';
import { Item } from '../item/Item';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  cards = [

  ]

  items: Item[];
  displayedColumns: string[] = ['date', 'description', 'withdraw', 'deposit', 'balance'];

  balance = this.getBalance();
  due = this.getAmountDue();

  constructor(private itemService: ItemServiceService, 
              private billService: BillService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(data => this.items = data);
  }

  getBalance() {
    this.itemService.getBalance()
      .subscribe(data => this.balance = data);
  }

  getAmountDue() {
    this.billService.getAmountDue()
      .subscribe(data => this.due = data);
  }

}
