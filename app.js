// 导入模型
import Todo from './src/models/Todomodels.js';
import sequelize from './src/utils/dbhelp.js';

// 查询全部数据
async function getTodos() {
  const todos = await Todo.findAll();
  return todos;
}
// 过滤查询
async function getTodosByFilter(filter) {
  const todos = await Todo.findOne({ where: filter });
  return todos;
}

// 新增数据
async function createTodo(todoData) {
  const todo = await Todo.create(todoData);
  return todo;
}
// 根据id更新数据
async function updateTodo(id, todoData) {
  const todo = await Todo.findByPk(id);
  if (todo) {
    await todo.update(todoData);
  }
  else {
    console.log(`Todo not found`);
  }
  return todo;
}
// 根据id删除数据
async function deleteTodo(id) {
  const todo = await Todo.findByPk(id);
  if (todo) {
    await todo.destroy();
  }
  else {
    console.log(`Todo not found`);
  }
  return todo;
}

// 导出所有 CRUD 函数
export {
  getTodos,
  getTodosByFilter,
  createTodo,
  updateTodo,
  deleteTodo
};



// // 查询全部数据
// getTodos().then(todos => console.log(todos));

// // 过滤查询
// getTodosByFilter({ id: '2' }).then(todos => console.log(todos));

// // 新增数据
// createTodo({
//   title: 'Sequelize',
//   content: 'use Sequelize',
//   tag: 'learn'
// })
//   .then(todo => console.log('Created Todo:', todo))
//   .catch(err => console.error('创建失败:', err));

// // 更新数据
// updateTodo('1', { title: 'Updated Todo' })
//   .then(todo => console.log('Updated Todo:', todo))
//   .catch(err => console.error('更新失败:', err));

// // 删除数据
// deleteTodo('6')
//   .then(todo => console.log('Deleted Todo:', todo))
//   .catch(err => console.error('删除失败:', err));