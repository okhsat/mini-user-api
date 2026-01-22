import request from 'supertest';
import { app } from '../../app';
import { signToken } from '@lib/jwt';

describe('User API', () => {
  const token = signToken({ userId: '1' });

  it('creates a user', async () => {
    const res = await request(app)
      .post('/users')
      .set('Authorization', `Bearer ${token}`)
      .send({ email: 'api@test.com' });

    expect(res.status).toBe(201);
    expect(res.body.email).toBe('api@test.com');
  });
});