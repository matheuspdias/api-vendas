import UserToken from '@entities/UserToken';
import crypto from 'crypto';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(UserToken)
class UserTokensRepository extends Repository<UserToken> {
  public async findByToken(token: string): Promise<UserToken | undefined> {
    const userToken = await this.findOne({ where: { token } });

    return userToken;
  }

  public async generate(user_id: number): Promise<UserToken | undefined> {
    const token = crypto.randomBytes(20).toString('hex');
    const userToken = await this.create({ user_id, token });

    await this.save(userToken);

    return userToken;
  }
}

export default UserTokensRepository;
