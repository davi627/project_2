import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = []; 

  constructor() {
    // Initialize cartItems from local storage if items exist
    const savedCart = localStorage.getItem('cartItems');
    this.cartItems = savedCart ? JSON.parse(savedCart) : [];
    console.log("CartService initialized");
  }

  addToCart(item: any) {
    this.cartItems.push(item);
    console.log("Current cart items:", this.cartItems);
    this.updateLocalStorage();
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    this.updateLocalStorage();
    console.log("Cart cleared");
  }
  removeCartItem(index: number) {
    this.cartItems.splice(index, 1);
  }
  

  private updateLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
}
