import { Category } from './category.model';
export class Book{
    id: number;
    name: String;
    author: String;
    category: Category;
    publishedDate: Number;
    user: String;
}