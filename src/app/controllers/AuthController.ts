import { Request, Response } from 'express';
import AuthService from '../services/users/AuthService';

export default class AuthController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authService = new AuthService();

    const user = await authService.execute({
      email,
      password,
    });

    return response.json({ user });
  }
}
