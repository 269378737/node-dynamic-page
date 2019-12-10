


import { routes as homeRouter } from './home';

export const router = {
  use: (app) => {
    app.use(homeRouter.routes()).use(homeRouter.allowedMethods());
  }
}