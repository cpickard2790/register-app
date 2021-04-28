import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Item } from './Item';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  private url = 'http://localhost:8080/items/';

  httpOptions = { 
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // Function type variable that will sort by item ids in ascending order
  sortById = function(data) {
    data.sort((a,b) => b.id - a.id);
  };
  
  // Get all items, sorting them by id
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url)
      .pipe(tap(this.sortById));
  }

  addItem(item: Item): Observable<Object> {
    return this.http.post(this.url + "withdraw", item);
  }

  depositItem(item: Item): Observable<Object> {
    return this.http.post(this.url + "deposit", item);
  }

  getBalance(): Observable<any> {
    return this.http.get(this.url + "currentBalance")
  }
}

