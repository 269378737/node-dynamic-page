import * as Router from "koa-router";

const router = new Router();


router.get('/', async ctx => {
    await ctx.render('home', {title: 'koa-hbs'})
})


export const routes = router;