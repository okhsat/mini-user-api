import '@config/env';
import { signToken } from '@lib/jwt';

const token = signToken({
  id: '1',
  email: 'dev@test.com',
  role: 'admin',
});

console.log('TOKEN:\n', token);