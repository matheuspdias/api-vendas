import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import AppError from 'src/shared/errors/AppError';
import authConfig from '@config/auth';

interface ITokenPayload {
  iat: number;
  exp: number;
  id: number;
}

export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT Token is missing.');
  }

  // Bearer hdsu1TOKEN31jjsd
  const [, token] = authHeader.split(' ');

  try {
    const decodedToken = verify(token, authConfig.jwt.secret);

    const { id } = decodedToken as ITokenPayload;

    request.user = {
      id: id,
    };

    return next();
  } catch {
    throw new AppError('Invalid JWT Token');
  }
}
