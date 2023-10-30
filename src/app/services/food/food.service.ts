import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})

export class FoodService {

  constructor() { }

  //Function to get all Foods By searchTerm
getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
  return this.getAll().filter(food =>
  food.Food_Name.toLowerCase().includes(searchTerm.toLowerCase()));
}
  //Creating function to list all tags
  getAllTags():Tag[]{
    return [
      { Tag_Name: 'All', count: 10 },
      { Tag_Name: 'FastFood', count: 1 },
      { Tag_Name: 'Popular', count: 7 },
      { Tag_Name: 'Non-veg', count: 6 },
      { Tag_Name: 'Burger', count: 2 },
      { Tag_Name: 'Pasta', count: 2 },
      { Tag_Name: 'Seafood', count: 1 },
      { Tag_Name: 'Pizza', count: 2 },
      { Tag_Name: 'Vegetarian', count: 3 },
      { Tag_Name: 'Sandwich', count: 1 },
      { Tag_Name: 'Sushi', count: 2},
      { Tag_Name: 'Asian', count: 2 },
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
        price: 9,
        cookTime: '10-15',
        favorite: false,
        origins: ['Finland', 'Globe'],
        stars: 3.8,
        imageURL: '/assets/images/foods/Food_1.jpg',
        tags: ['FastFood', 'Popular','Non-veg']
        },
        {
        id:2,
        Food_Name: 'Burger Luxury',
        price: 10,
        cookTime: '15-25',
        favorite: true,
        origins: ['US','Germany'],
        stars: 4.5,
        imageURL: '/assets/images/foods/Food_2.jpg',
        tags: ['Burger','popular','Non-veg']
        },
        {
        id:3,
        Food_Name: 'Pork Burger',
        price: 16,
        cookTime: '25-30',
        favorite: true,
        origins: ['US', 'Globe'],
        stars: 3.5,
        imageURL: '/assets/images/foods/Food_3.jpg',
        tags: ['Burger','Popular'],
        },
        {
        id:4,
        Food_Name: 'Seafood pasta',
        price: 25,
        cookTime: '35',
        favorite: false,
        origins: ['Europe','US'],
        stars: 3.7,
        imageURL: '/assets/images/foods/Food_4.jpg',
        tags: ['Seafood','Non-veg','Pasta']
        },
        {
        id:5,
        Food_Name: 'Cheese Pizza',
        price: 29,
        cookTime: '45',
        favorite: true,
        origins: ['Globe'],
        stars: 4.5,
        imageURL: '/assets/images/foods/Food_5.jpg',
        tags: ['Pizza','Vegetarian','Popular']
        },
        {
        id:6,
        Food_Name: 'Spaghetti Nerano',
        price: 29,
        cookTime: '24',
        favorite: true,
        origins: ['Europe','Globe'],
        stars: 5.0,
        imageURL: '/assets/images/foods/Food_6.jpg',
        tags: ['Pasta','Vegetarian','Popular']
        },
        {
        id:7,
        Food_Name: 'Veg. Sandwich',
        price: 25,
        cookTime: '21',
        favorite: true,
        origins: ['US'],
        stars: 3.6,
        imageURL: '/assets/images/foods/Food_7.jpg',
        tags: ['Sandwich','Vegetarian','Popular']
        },
        {
        id:8,
        Food_Name: 'Sushies',
        price: 25,
        cookTime: '65',
        favorite: false,
        origins: ['Japan','Globe'],
        stars: 1.5,
        imageURL: '/assets/images/foods/Food_8.jpg',
        tags: ['Sushi','Asian','Popular','Non-veg']
        },
        {
        id:9,
        Food_Name: 'Japan Sushies',
        price: 55.15,
        cookTime: '25',
        favorite: false,
        origins: ['Japan', 'Globe'],
        stars: 2.5,
        imageURL: '/assets/images/foods/Food_9.jpg',
        tags: ['Sushi','Asian','Non-veg','Popular']
        },
        {
        id:10,
        Food_Name: 'Kebab vegpizza',
        price: 35,
        cookTime: '25-65',
        favorite: true,
        origins: ['Europe','US'],
        stars: 4.5,
        imageURL: '/assets/images/foods/Food_10.jpg',
        tags: ['Pizza','Non-veg']
      }
    ]
  }
}


