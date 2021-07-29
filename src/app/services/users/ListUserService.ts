import User from '@entities/User';
import UsersRepository from 'src/app/repositories/UsersRepository';
import { getCustomRepository } from 'typeorm';

class ListUserService {
  public async execute(): Promise<User[]> {
    const usersRepository = getCustomRepository(UsersRepository);

    const users = usersRepository.find({});

    return users;
  }
}

export default ListUserService;
