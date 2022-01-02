import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {
  pizzas: any;
  isAdded: boolean = false;
  // addedPizzaId!: number;

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.displayCart();
  }

  displayCart() {
    this.pizzaService.getPizza().subscribe((data) => {
      this.pizzas = data;
      console.log(data)
    })
  }

  addToCart(selected_pizza: Pizza) {
    this.pizzaService.addToCart(selected_pizza).subscribe(data => {
      this.isAdded = true;
      // this.addedPizzaId = selected_pizza.id   
      setTimeout(() => {
        this.isAdded = false
      }, 2500);
    })
  }

}
