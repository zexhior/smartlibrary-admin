import { Category } from './category';
import { Authors } from './authors';

export interface Book extends Object{
    _id: string,
    title: string,
    isbn: string,
    star: number,
    publishing_date: string,
    cover: string,
    synopsis: string,
    file: string,
}