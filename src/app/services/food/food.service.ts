import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FoodService {

  constructor() { }

  //Creating function for getAll food image
  getAll(): String[]{

    return[
        '/assets/images/foods/Food_1.jpg',
        '/assets/images/foods/Food_2.jpg',
        '/assets/images/foods/Food_3.jpg',
        '/assets/images/foods/Food_4.jpg',
        '/assets/images/foods/Food_5.jpg',
        '/assets/images/foods/Food_6.jpg',
        '/assets/images/foods/Food_7.jpg',
        '/assets/images/foods/Food_8.jpg',
        '/assets/images/foods/Food_9.jpg',
        '/assets/images/foods/Food_10.jpg',
        '/assets/images/foods/Food_11.jpg',
        '/assets/images/foods/Food_12.jpg',
        '/assets/images/foods/Food_13.jpg',
        '/assets/images/foods/Food_14.jpg',
        '/assets/images/foods/Food_15.jpg',
        '/assets/images/foods/Food_16.jpg',
        '/assets/images/foods/Food_17.jpg',
        '/assets/images/foods/Food_18.jpg',
        '/assets/images/foods/Food_19.jpg',
        '/assets/images/foods/Food_20.jpg',
      ]


}


}
