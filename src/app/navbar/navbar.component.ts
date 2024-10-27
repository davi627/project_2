import { Component } from '@angular/core';
import { CartService } from '../cart.service'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  cartItems: any[] = [];
  showCartPopup = false;

  constructor(private cartservice: CartService) {}

  toggleCartPopup() {
    this.showCartPopup = !this.showCartPopup;
    if (this.showCartPopup) {
      this.cartItems = this.cartservice.getCartItems();
    }
  }
}
