import Controller from './controller';

class IndexController extends Controller{
    constructor(){
        super();
    }
     async actionIndex(ctx){
        //  throw new Error('自定义错误');
        ctx.body = await ctx.render('index')
    }
}

export default IndexController;