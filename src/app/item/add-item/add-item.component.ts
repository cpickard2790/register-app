import { Component, OnInit } from '@angular/core';
import { SummaryComponent } from 'src/app/summary/summary.component';
import { Item } from '../Item';
import { ItemServiceService } from '../item-service.service';
import { TransactionsComponent } from '../transactions/transactions.component';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  displayedColumns: string[] = ['date', 'description', 'withdraw'];
  item: Item = new Item();
  
  constructor(private itemService: ItemServiceService, private summary: SummaryComponent, private transactions: TransactionsComponent) { }

  ngOnInit(): void {

  }

  add() {
    this.itemService.addItem(this.item)
      .subscribe(data => { 
        console.log(data)
        this.item = new Item();
        this.summary.getBalance();
        this.transactions.getItems();
      },
      error => console.log(error));
  }

  deposit() {
    this.itemService.depositItem(this.item)
        .subscribe(data => {
          console.log(data)
          this.item = new Item();
          this.summary.getBalance();
          this.transactions.getItems();
        },
        error => console.log(error));
    }
  

  onSubmit() {
    if (this.item.deposit == null) {
      this.add();
    }
    else {
      this.deposit();
    }
  }
}
