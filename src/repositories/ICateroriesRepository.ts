import { Category } from '../model/Category';

interface IcategoriesRepository{
    findByname(name:string):Category;
    list():Category[];

}