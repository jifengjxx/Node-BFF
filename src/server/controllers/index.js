import Router  from '@koa/router';
import IndexController from './IndexController';
import ApiController from './ApiController';
import BooksController from './BooksController'

const router = new Router();
const indexController =  new IndexController();
const apiController =  new ApiController();
const booksController =  new BooksController();

function initController(app){
    // router.get('/', (ctx, next) =>{
    //       ctx.body = 'controller 初始化成功'
    // })
    // router.get('/', indexController.actionIndex);
    // router.get('/books/list', booksController.actionBooksList)
    router.get('/', indexController.actionIndex);
    router.get('/api/getBooksList', apiController.actionBooksList);
    router.get('/books/list', booksController.actionBooksList);
    router.get('/books/create', booksController.actionBooksCreate);
    app
        .use(router.routes())

        .use(router.allowedMethods())
}

export default initController;