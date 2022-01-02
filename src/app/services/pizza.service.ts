import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  baseUrl = 'http://localhost:3000';
  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // }

  constructor(private http: HttpClient) { }

  getPizza(): Observable<Pizza> {
    return this.http.get<Pizza>(`${this.baseUrl}/pizzas`)
  }
  addToCart(data: Pizza): Observable<Pizza> {
    return this.http.post<Pizza>(this.baseUrl + '/cart', data)
  }
  getCart(): Observable<Pizza> {
    return this.http.get<Pizza>(`${this.baseUrl}/cart`)
  }
  onDelete(id: any): Observable<Pizza> {
    return this.http.delete<Pizza>(`${this.baseUrl}/cart/${id}`)
  }
}
