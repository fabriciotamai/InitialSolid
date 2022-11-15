import { Category } from '../model/Category';
import {IcreateCategoryDTO, ICategoriesRepository} from './ICateroriesRepository';


class PostGresCategoriesRepository implements ICategoriesRepository{
    findByname(name: string): Category {
        throw new Error("Method not implement");

    }

    list():Category[]{
        throw new Error('Method not implement')
    }

    create({name, description}:IcreateCategoryDTO ):void{
        throw new Error('Method not implemented');


    }

}

export { PostGresCategoriesRepository}