import { Router } from 'express';
import productsRouter from './products.routes';
import sessionsRouter from './sessions.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

export default routes;
