import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})

export class FoodService {
constructor() { }

//Getting food info by ID
getFoodById(id: number): Food{
  return this.getAll().find(food => food.id == id)!;
}

  //Function to get all Foods By searchTerm
getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
  return this.getAll().filter(food =>
  food.Food_Name.toLowerCase().includes(searchTerm.toLowerCase()));
}

//Creating function to list all tags
getAllTags():Tag[]{
    return [
      { Tag_Name: 'All', count: 27 },
      { Tag_Name: 'Non-veg', count: 15},
      { Tag_Name: 'Vegetarian', count:10 },
      { Tag_Name: 'Burger', count: 2 },
      { Tag_Name: 'Pasta', count:3 },
      { Tag_Name: 'Pizza', count: 2 },
      { Tag_Name: 'Asian', count:11},
      { Tag_Name: 'Sandwich', count: 2 },
      { Tag_Name: 'Sweets', count: 3 },
      { Tag_Name: 'Salad', count: 4 },
      { Tag_Name: 'Soup', count: 3  },
    ];
}

//Creating function for getAll food image by Tag's
getAllFoodsByTag(tag: string): Food[]{
  return tag == "All" ?
  this.getAll() :
  this.getAll().filter(food => food.tags?.includes(tag));
}

//Creating function for getAll food image
getAll():Food[]{
    return[
      {
        id:1,
        Food_Name: 'Salami Sandwiches',
        price: 19,
        cookTime: '10-15',
        favorite: false,
        origins: ['Europe', 'Americans','Africa','Oceania'],
        imageURL: '/assets/images/foods/Food_1.jpg',
        tags: ['Non-veg','Sandwich']
      },
      {
        id:2,
        Food_Name: 'Luxury Burger',
        price: 316,
        cookTime: '15-25',
        favorite: true,
        origins: ['Americans','Europe','Africa','Oceania'],
        imageURL: '/assets/images/foods/Food_2.jpg',
        tags: ['Burger','Non-veg']
      },
      {
        id:3,
        Food_Name: 'Pork Burger',
        price: 74,
        cookTime: '15-25',
        favorite: false,
        origins: ['Americans','Europe','Oceania'],
        imageURL: '/assets/images/foods/Food_3.jpg',
        tags: ['Burger','Non-veg'],
      },
      {
        id:4,
        Food_Name: 'Seafood pasta',
        price: 312,
        cookTime: '39',
        favorite: false,
        origins: ['Europe','Africa','Oceania'],
        imageURL: '/assets/images/foods/Food_4.jpg',
        tags: ['Non-veg','Pasta']
      },
      {
        id:5,
        Food_Name: 'Cheese Pizza',
        price: 89,
        cookTime: '45',
        favorite: true,
        origins: ['Globe'],
        imageURL: '/assets/images/foods/Food_5.jpg',
        tags: ['Pizza','Vegetarian']
      },
      {
        id:6,
        Food_Name: 'Spaghetti Nerano',
        price: 39,
        cookTime: '24',
        favorite: true,
        origins: ['Europe','Americans'],
        imageURL: '/assets/images/foods/Food_6.jpg',
        tags: ['Pasta','Vegetarian']
      },
      {
        id:7,
        Food_Name: 'Veg. Sandwich',
        price: 25,
        cookTime: '21',
        favorite: true,
        origins: ['Europe','Americans','Oceania'],
        imageURL: '/assets/images/foods/Food_7.jpg',
        tags: ['Vegetarian','Sandwich']
      },
      {
        id:8,
        Food_Name: 'Sushie mix',
        price: 925,
        cookTime: '65',
        favorite: false,
        origins: ['Asia','Europe','Americans'],
        imageURL: '/assets/images/foods/Food_8.jpg',
        tags: ['Asian','Non-veg']
      },
      {
        id:9,
        Food_Name: 'Japan Sushies',
        price: 125,
        cookTime: '25',
        favorite: false,
        origins: ['Asia','Europe','Americans'],
        imageURL: '/assets/images/foods/Food_9.jpg',
        tags: ['Asian','Non-veg']
      },
      {
        id:10,
        Food_Name: 'Kebab vegpizza',
        price: 115,
        cookTime: '65',
        favorite: true,
        origins: ['Globe'],
        imageURL: '/assets/images/foods/Food_10.jpg',
        tags: ['Pizza','Non-veg']
      },
      {
        id:11,
        Food_Name: 'Green pasta',
        price: 85,
        cookTime: '25',
        favorite: false,
        origins: ['Globe'],
        imageURL: '/assets/images/foods/Food_11.jpg',
        tags: ['Pasta','Vegetarian']
      },
      {
        id:12,
        Food_Name: 'flavour mix salad',
        price: 60,
        cookTime: '20',
        favorite: false,
        origins: ['Europe','Americans','Oceania'],
        imageURL: '/assets/images/foods/Food_12.jpg',
        tags: ['Salad','Vegetarian']
      },
      {
        id:13,
        Food_Name: 'Chicken salad',
        price: 79,
        cookTime: '20',
        favorite: true,
        origins: ['Europe','Americans','Oceania'],
        imageURL: '/assets/images/foods/Food_13.jpg',
        tags: ['Salad','Non-veg']
      },
      {
        id:14,
        Food_Name: 'Fish soup',
        price: 49,
        cookTime: '46',
        favorite: false,
        origins: ['Europe','Americans','Asia'],
        imageURL: '/assets/images/foods/Food_14.jpg',
        tags: ['Soup','Non-veg']
      },
      {
        id:15,
        Food_Name: 'Seafish soup',
        price: 35,
        cookTime: '60',
        favorite: false,
        origins: ['Europe','Americans','Oceania'],
        imageURL: '/assets/images/foods/Food_15.jpg',
        tags: ['Soup','Non-veg']
      },
      {
        id:16,
        Food_Name: 'Vegetarian soup',
        price: 28,
        cookTime: '15',
        favorite: false,
        origins: ['Europe','Americans','Oceania'],
        imageURL: '/assets/images/foods/Food_16.jpg',
        tags: ['Soup','Vegetarian']
      },
      {
        id:17,
        Food_Name: 'Chicken cheese salad',
        price: 45,
        cookTime: '31',
        favorite: true,
        origins: ['Globe'],
        imageURL: '/assets/images/foods/Food_17.jpg',
        tags: ['Salad','Non-veg']
      },
      {
        id:18,
        Food_Name: 'Salad mix bomb',
        price: 35,
        cookTime: '31',
        favorite: true,
        origins: ['Globe'],
        imageURL: '/assets/images/foods/Food_18.jpg',
        tags: ['Salad','Non-veg']
      },
      {
        id:19,
        Food_Name: 'Indian flavour sauce',
        price: 105,
        cookTime: '39',
        favorite: true,
        origins: ['Asia'],
        imageURL: '/assets/images/foods/Food_19.jpg',
        tags: ['Asian','Non-veg']
      },
      {
        id:20,
        Food_Name: 'Chicken biryani',
        price: 85,
        cookTime: '45',
        favorite: true,
        origins: ['Asia'],
        imageURL: '/assets/images/foods/Food_20.jpg',
        tags: ['Asian','Non-veg']
      },
      {
        id:21,
        Food_Name: 'Samosa',
        price: 65,
        cookTime: '45',
        favorite: true,
        origins: ['Asia'],
        imageURL: '/assets/images/foods/Food_21.jpg',
        tags: ['Asian','Non-veg']
      },
      {
        id:22,
        Food_Name: 'Chicken rise',
        price: 53,
        cookTime: '45',
        favorite: false,
        origins: ['Asia'],
        imageURL: '/assets/images/foods/Food_22.jpg',
        tags: ['Asian','Non-veg']
      },
      {
        id:23,
        Food_Name: 'Jelabi',
        price: 46,
        cookTime: '25',
        favorite: true,
        origins: ['Asia','Europe','American'],
        imageURL: '/assets/images/foods/Food_23.jpg',
        tags: ['Asian','Sweets']
      },
      {
        id:24,
        Food_Name: 'Green rise flavour',
        price: 45,
        cookTime: '55',
        favorite: false,
        origins: ['Asia','American'],
        imageURL: '/assets/images/foods/Food_24.jpg',
        tags: ['Asian','Vegetarian']
      },
      {
        id:25,
        Food_Name: 'Colour rise cup',
        price: 69,
        cookTime: '50',
        favorite: false,
        origins: ['Asia'],
        imageURL: '/assets/images/foods/Food_25.jpg',
        tags: ['Asian','Vegetarian']
      },
      {
        id:26,
        Food_Name: 'Gulab jaman',
        price: 179,
        cookTime: '48',
        favorite: true,
        origins: ['Globe'],
        imageURL: '/assets/images/foods/Food_26.jpg',
        tags: ['Asian','Vegetarian','Sweets']
      },
      {
        id:27,
        Food_Name: 'Firni cup',
        price: 119,
        cookTime: '36',
        favorite: true,
        origins: ['Globe'],
        imageURL: '/assets/images/foods/Food_27.jpg',
        tags: ['Asian','Vegetarian','Sweets']
      }
    ]
  }
}
