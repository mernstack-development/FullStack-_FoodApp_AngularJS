export class Food{
    id!: number;
    Name!: string;
    price!:number;
    tags?:string[];
    favorite: boolean = false;
    stars:number = 0;
    imageURL!: string;
    origins!:string[];
    cookTinme!:string;

}
