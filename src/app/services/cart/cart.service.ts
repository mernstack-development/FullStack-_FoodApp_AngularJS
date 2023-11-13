import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  //creating private cart field
  private cart:Cart = new Cart();

  //Creating function to Adding into a cart
  addToCart(food: Food):void{
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
      //Checking for do we have the food already in the cart
      if(cartItem){
        this.changeQuantity(food.id, cartItem.quantity + 1);
        //return from the function
        return;
      }
        // IF food is not into the cart, then it will be addedd into cart
        this.cart.items.push(new CartItem(food));
  }

  //Creating function to remove food from cart
  removeFromCart(foodId:number): void{
    this.cart.items =
    this.cart.items.filter(item => item.food.id != foodId);
  }

  //Creating function to cahnge quantity inside fo the cart
  changeQuantity(foodId:number, quantity:number){
  let cartItem = this.cart.items.find(item => item.food.id === foodId);
       //if cartItem not found or undefine
      if(!cartItem) return;
      //otherwise give them the quantity
      cartItem.quantity = quantity;
  }


  //Creating cart function to just return function
  getCart():Cart{
    return this.cart;
  }

}
