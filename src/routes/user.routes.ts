import { Router } from 'express';
import { z } from 'zod';
import { UserController } from '@controllers/user.controller';
import { validate } from '@middlewares/validate.middleware';
import { auth } from '@middlewares/auth.middleware';

export const userRoutes = Router();

const createUserSchema = z.object({
  email: z.email()
});

userRoutes.post(
  '/',
  auth,
  validate(createUserSchema),
  UserController.create
);

userRoutes.get('/', UserController.findAll);