import { DataTypes } from 'sequelize';
import sequelize from '../utils/dbhelp.js';

const Todo = sequelize.define(
  'Todo',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'Todo',
    createdAt: false,
    updatedAt: false,
  }
);

export default Todo;