export class Food{
    id!: number;
    Food_Name!: string;
    price!:number;
    tags?:string[];
    favorite: boolean = false;
    imageURL!: string;
    origins!:string[];
    cookTime!:string;
}
