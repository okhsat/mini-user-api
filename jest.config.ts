import type { Config } from 'jest';
import { createDefaultPreset } from 'ts-jest';

const tsJestTransformCfg = createDefaultPreset().transform;

const config: Config = {
  preset: 'ts-jest',

  testEnvironment: 'node',

  setupFiles: ['<rootDir>/src/tests/jest.setup.ts'],

  transform: {
    ...tsJestTransformCfg,
  },

  roots: ['<rootDir>/src'],

  moduleNameMapper: {
    '^@controllers/(.*)$': '<rootDir>/src/controllers/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@routes/(.*)$': '<rootDir>/src/routes/$1',
    '^@middlewares/(.*)$': '<rootDir>/src/middlewares/$1',
    '^@lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@config/(.*)$': '<rootDir>/src/config/$1',
    '^@types/(.*)$': '<rootDir>/src/types/$1',
    '^@tests/(.*)$': '<rootDir>/src/tests/$1',
  },
};

export default config;