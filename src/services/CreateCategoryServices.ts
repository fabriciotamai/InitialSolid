import { ICategoriesRepository} from '../repositories/ICateroriesRepository';

interface IRequest{
    name:string;
    description:string;
}

class CreateCategoryService{

    constructor(private categoriesRepository: ICategoriesRepository){

    }
    execute({name, description}:IRequest){
       
        const categoryAlreadExists = this.categoriesRepository.findByName(name);

    

        if(categoryAlreadExists){
           throw new Error("Category already exists !")
        }
    
        this.categoriesRepository.create({name, description})

    }


}


export { CreateCategoryService}