import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';

import { AppError } from '../errors/AppError';

interface ITokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export default async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const authHeader = req.headers.authorization;

  if (!authHeader) throw new AppError('JWT token is missing', 401);

  const [, token] = authHeader.split(' ');

  try {

    const decoded = verify(token, authConfig.secret);

    const { id } = decoded as ITokenPayload; // forçar tipo de variavel com TS
   
    req.user = {
      id
    };

    return next();
    
  } catch (error) {
    throw new AppError('Token invalid.', 401);
  }
  
}