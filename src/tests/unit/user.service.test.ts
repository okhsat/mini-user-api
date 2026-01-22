import { UserService } from '@services/user.service';

describe('UserService', () => {
  it('creates a user', () => {
    const user = UserService.create('test@test.com');
    
    expect(user.email).toBe('test@test.com');
  });
});