import { Request, Response } from 'express';
import ResetPasswordService from '../services/users/ResetPasswordService';
import SendForgotPasswordEmailService from '../services/users/SendForgotPasswordEmailService';

export default class ForgotPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendForgotPassword = new SendForgotPasswordEmailService();

    await sendForgotPassword.execute({ email });

    return response.status(204).json();
  }

  public async reset(request: Request, response: Response): Promise<Response> {
    const { password, token } = request.body;

    const resetPassword = new ResetPasswordService();

    await resetPassword.execute({ password, token });

    return response.status(204).json();
  }
}
