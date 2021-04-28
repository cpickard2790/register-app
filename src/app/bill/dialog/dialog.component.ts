import { Component, OnInit } from '@angular/core';
import { BillService } from '../bill.service';
import { Bill } from '../Bill';
import { MatSnackBar } from '@angular/material/snack-bar';

interface DateDue {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  // Number to be added to bill dateDue
  selectedDate: number;

  // dates passed into <mat-option>
  dates: DateDue[] = [
    {value: 1, viewValue: '1st'},
    {value: 2, viewValue: '2nd'},
    {value: 3, viewValue: '3rd'},
    {value: 4, viewValue: '4th'},
    {value: 5, viewValue: '5th'},
    {value: 6, viewValue: '6th'},
    {value: 7, viewValue: '7th'},
    {value: 8, viewValue: '8th'},
    {value: 9, viewValue: '9th'},
    {value: 10, viewValue: '10th'},
    {value: 11, viewValue: '11th'},
    {value: 12, viewValue: '12th'},
    {value: 13, viewValue: '13th'},
    {value: 14, viewValue: '14th'},
    {value: 15, viewValue: '15th'},
    {value: 16, viewValue: '16th'},
    {value: 17, viewValue: '17th'},
    {value: 18, viewValue: '18th'},
    {value: 19, viewValue: '19th'},
    {value: 20, viewValue: '20th'},
    {value: 21, viewValue: '21st'},
    {value: 22, viewValue: '22nd'},
    {value: 23, viewValue: '23rd'},
    {value: 24, viewValue: '24th'},
    {value: 25, viewValue: '25th'},
    {value: 26, viewValue: '26th'},
    {value: 27, viewValue: '27th'},
    {value: 28, viewValue: '28th'},
    {value: 29, viewValue: '29th'},
    {value: 30, viewValue: '30th'},
    {value: 31, viewValue: '31st'},

  ]

  bill: Bill = new Bill();

  constructor(private billService: BillService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  // Get the number from mat-select
  onSelection(value:any) {
    this.selectedDate = value.value;
  }

  // Add bill
  add() {
    this.bill.dateDue = this.selectedDate;
    this.billService.addBill(this.bill)
      .subscribe(data => { 
        this.bill = new Bill();
      },
      error => console.log(error));
  }

  openSnackBar() {
    this._snackBar.open('Bill added!');
  }

  onSubmit() {
    this.add();
  }
}
