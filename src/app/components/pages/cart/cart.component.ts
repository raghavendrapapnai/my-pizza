import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { PizzaService } from 'src/app/services/pizza.service';
// import { PizzasComponent } from '../pizzas/pizzas.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartTotal: number = 0;
  cart: any;

  constructor(public pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.displayCart();
  }

  displayCart() {
    this.pizzaService.getCart().subscribe((data) => {
      this.cart = data;

      this.cartTotal = 0;
      for (let i = 0; i < this.cart.length; i++) {
        this.cartTotal += this.cart[i].price;
      }
    });
  }

  deletePizza(id: any) {
    this.pizzaService.onDelete(id).subscribe(data => {
      console.log(id + ' deleted');
      this.displayCart();
    })
  }

  // checkQuantity() {
  //   for (let i = 0; i < this.cart.length; i++) {
  //     if (this.cart[i].id === this.pizzaComponent.addedPizzaId) {
  //       this.cart[i].quantity += 1;
  //     }
  //   }
  // }

}
