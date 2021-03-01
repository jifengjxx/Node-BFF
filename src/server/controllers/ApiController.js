import Controller   from './controller';
import BooksModel from '../models/BooksModel'
class ApiController extends Controller{
    constructor(){
        super();
    }
    apiActionDataList(ctx){
        ctx.body = [
            {
                id:1,
                data:'1'
            },
            {
                id:2,
                data:'2'
            },
        ]
    }

    async actionBooksList(ctx){
        const booksModel = new BooksModel();
        const result = await booksModel.getBooksList();
        ctx.body = result.data;
    }
}

export default ApiController;