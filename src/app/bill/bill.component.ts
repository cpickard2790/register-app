import { Component, OnInit } from '@angular/core';
import { Bill } from './Bill';
import { BillService } from './bill.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  bills: Bill[];
  total: number;
  
  displayedColumns: string[] = ['date', 'name', 'amount'];

  constructor(private billService: BillService, public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogComponent);
    this.dialog.afterAllClosed.subscribe(data => this.refresh())
  }

  ngOnInit(): void {
    this.getBills();
    this.getTotalDue();
  }

  refresh() {
    this.getBills();
    this.getTotalDue();
  }

  getTotalDue() {
    this.billService.getTotalAmount()
      .subscribe(data => this.total = data);
  }

  getBills(): void {
    this.billService.getBills()
      .subscribe(data => this.bills = data);
  }
}


