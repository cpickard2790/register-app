import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Bill } from './Bill';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})

export class BillService {

  private url = 'http://localhost:8080/bills/';

  httpOptions = { 
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  sortByDate = function(date) {
    date.sort((a,b) => a.dateDue - b.dateDue);
  };

  getBills(): Observable<Bill[]> {
    return this.http.get<Bill[]>(this.url)
    .pipe(tap(this.sortByDate));
  }

  addBill(bill: Bill): Observable<Object> {
    return this.http.post(this.url + "add", bill);
  }

  getAmountDue(): Observable<any> {
    return this.http.get(this.url + "amount")
  }

  getTotalAmount(): Observable<any> {
    return this.http.get(this.url + "total")
  }
}

 