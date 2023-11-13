import { Food } from "./Food"

export class CartItem{
  constructor(food:Food){
    this.food = food;

  }

  //Setting item's quantity originally as 1
  food:Food;
  quantity:number = 1;

  //Calculating price_of_By_Number_of_item
  get price():number{
    return this.food.price * this.quantity;

  }

}
