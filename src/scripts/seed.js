import { readFile } from 'node:fs/promises';
import sequelize from '../utils/dbhelp.js';
import Todo from '../models/Todomodels.js';

try {
  const initializeTodosString = await readFile(
    './src/scripts/data/init.json',
    'utf-8');
  const data = JSON.parse(initializeTodosString);

  await sequelize.sync({ force: true });
  const todos = await Todo.bulkCreate(data);
  console.log('Todos seeded:', JSON.stringify(todos, null, 2));
} catch (err) {
  console.error('Error seeding database:', err);
} finally {
  sequelize.close();
}