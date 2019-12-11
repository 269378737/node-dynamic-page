
import * as Koa from 'koa';
import * as KoaViews from 'koa-views';
import * as path from 'path';

import { router } from "./routers/index";

const app = new Koa();

// 加载模板引擎
app.use(KoaViews(path.join(__dirname, './views/'), {
  extension: 'hbs',
  map: {
    'hbs': 'handlebars'
  }
}))

router.use(app);


app.listen(22303, () => console.log(`the server is running on port 22303, please click http://localhost:22303 to visit it`));