import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = []; 

  constructor() {
    // Initialize cartItems or other setup if needed
    console.log("CartService initialized");
  }

  addToCart(item: any) {
    this.cartItems.push(item);
    console.log(`Item added: ${item.title}`);
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    console.log("Cart cleared");
  }
}
