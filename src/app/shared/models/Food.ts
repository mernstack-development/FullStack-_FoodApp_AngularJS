export class Food{
    id!: number;
    Food_Name!: string;
    price!:number;
    tags?:string[];
    favorite: boolean = false;
    stars:number = 0;
    imageURL!: string;
    origins!:string[];
    cookTime!:string;
}
