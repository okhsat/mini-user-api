import { Request, Response, NextFunction } from 'express';
import { ZodType } from 'zod';

export const validate = (schema: ZodType) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      // Parse & replace body with validated data
      req.body = schema.parse(req.body);

      next();

    } catch (err) {
      return res.status(400).json({
        message: 'Validation failed',
        error: err
      });
    }
  };