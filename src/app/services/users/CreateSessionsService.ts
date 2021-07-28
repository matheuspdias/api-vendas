import User from '@entities/User';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import UsersRepository from 'src/app/repositories/UsersRepository';
import AppError from 'src/shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class CreateSessionsService {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const usersRepository = getCustomRepository(UsersRepository);
    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const passwordConfirmed = await compare(password, user.password);

    if (!passwordConfirmed) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const token = sign({ id: user.id }, '5ceddf8170e13f3583fbb7ea025a6384', {
      expiresIn: '1d',
    });

    return { user, token };
  }
}

export default CreateSessionsService;
