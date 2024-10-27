import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showCartPopup = false;
  cartItems: any[] = [];

  constructor(private cartService: CartService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  toggleCartPopup(): void {
    this.showCartPopup = !this.showCartPopup;
    if (this.showCartPopup) {
      this.loadCartItems();
    }
  }
  removeFromCart(index: number) {
    this.cartService.removeCartItem(index);
    this.cartItems = this.cartService.getCartItems();
  }
  

  loadCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
    console.log("Cart items in popup:", this.cartItems); // Debugging: Ensure items are loaded
    this.cdr.detectChanges(); // Force change detection if needed
  }
}
