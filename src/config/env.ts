import dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

if ( ! process.env.JWT_SECRET ) {
  throw new Error('JWT_SECRET is not defined');
}

if ( ! process.env.PORT ) {
  process.env.PORT = '3000';
}