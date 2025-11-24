import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2';

const databaseConfig = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  dialect: 'mysql',
  dialectModule: mysql2,
  pool: { max: 5, min: 0, acquire: 30000, idle: 10000 }
}

const sequelize = new Sequelize(
  databaseConfig.database,
  databaseConfig.username,
  databaseConfig.password,
  {
    host: databaseConfig.host,
    dialect: databaseConfig.dialect,
    dialectModule: databaseConfig.dialectModule,
    pool: databaseConfig.pool
  }
);

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;