import { Router } from 'express';
import productsRouter from './products.routes';
import authRouter from './auth.routes';
import usersRouter from './users.routes';
import passwordRouter from './password.routes';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);
routes.use('/auth', authRouter);
routes.use('/password', passwordRouter);

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

export default routes;
