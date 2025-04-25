export const EnvConfiguration = () => ({
  enviroment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGODB,
  port: process.env.PORRT || 3002,
  defaultLimit: +(process.env.DEFAULT_LIMIT ?? 7),
});
