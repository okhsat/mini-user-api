import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '@lib/jwt';

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if ( ! token ) 
    return res.status(401).json(
      { 
        message: 'Unauthorized' 
      }
    );

  verifyToken(token);

  next();
};