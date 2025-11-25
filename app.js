// 导入模型
import Todo from '../models/Todomodels.js';

// 查询全部数据
async function getTodos() {
  const todos = await Todo.findAll();
  return todos;
}
// 过滤查询
async function getTodosByFilter(filter) {
  const todos = await Todo.findAll({ where: filter });
  return todos;
}

// 新增数据
async function createTodo(todoData) {
  const todo = await Todo.create(todoData);
  return todo;
}
// 更新数据
async function updateTodo(id, todoData) {
  const todo = await Todo.findByPk(id);
  if (todo) {
    await todo.update(todoData);
  }
  return todo;
}
// 删除数据
async function deleteTodo(id) {
  const todo = await Todo.findByPk(id);
  if (todo) {
    await todo.destroy();
  }
  return todo;
}



