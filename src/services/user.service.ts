import crypto from 'crypto';
import { User } from '../types/user';

const users: User[] = [];

export class UserService {
  static create(email: string): User {
    const user = { 
      id: crypto.randomUUID(), 
      email 
    };

    users.push(user);
    
    return user;
  }

  static findAll(): User[] {
    return users;
  }
}