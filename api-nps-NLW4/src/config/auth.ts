interface JWTConfig {
  secret: string;
  expiresIn: string;
}

export default {
    secret: process.env.APP_SECRET || 'default',
    expiresIn: '1d',
  } as JWTConfig