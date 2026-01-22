import { Request, Response } from 'express';
import { UserService } from '@services/user.service';

export class UserController {
  static create(req: Request, res: Response) {
    const user = UserService.create(req.body.email);

    res.status(201).json(user);
  }

  static findAll(_: Request, res: Response) {
    res.json(
        UserService.findAll()
    );
  }
}