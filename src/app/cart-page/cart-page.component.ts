import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})

export class CartPageComponent implements OnInit {
  cart!:Cart;
  // Injecting cart service
  constructor( private cartService: CartService ) {

    this.setCart()
}

ngOnInit():void {
  }

  //removing from Cart
  removeFromCart( cartItem:CartItem ){
    this.cartService.removeFromCart( cartItem.food.id );
    //refreshing the cart
    this.setCart();
  }

  //Cahnging quantity
  changeQuantity(cartItem:CartItem, quantityInString:string){
    //parsing quantityInString
    const quantity = parseInt( quantityInString );
    this.cartService.changeQuantity( cartItem.food.id, quantity );
    this.setCart();
  }



  //Setting setCart function whivh return nothing
  setCart(){
    this.cart = this.cartService.getCart();
  }


}
