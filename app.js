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


// raw query
// // 类型一
// import { QueryTypes } from 'sequelize';
// const todos = await sequelize.query('SELECT * FROM `todo`', {
//   type: QueryTypes.SELECT,
// });
// // We didn't need to destructure the result here - the results were returned directly
// console.log(todos);

// // 类型二 映射到模型
// import { QueryTypes } from 'sequelize';
// const projects = await sequelize.query('SELECT * FROM `todo`', {
//   model: Todo,
//   mapToModel: true, // pass true here if you have any mapped fields
// });
// // We didn't need to destructure the result here - the results were returned directly
// console.log(projects);

//  未命名参数（? 顺序替换）
// import { QueryTypes } from 'sequelize';

// const projects = await sequelize.query('SELECT * FROM `todo` WHERE `tag` = ?', {
//   replacements: ['life'],
//   type: QueryTypes.SELECT,
// });

// console.log('结果：', projects);

// // 命名参数（:name 替换）
// import { QueryTypes } from 'sequelize';

// const projects = await sequelize.query('SELECT * FROM `todo` WHERE `tag` = :tag', {
//   replacements: { tag: 'life' },
//   type: QueryTypes.SELECT,
// });

// console.log('结果：', projects);

// //数组in查询
// import { QueryTypes } from 'sequelize';

// const projects = await sequelize.query('SELECT * FROM `todo` WHERE `tag` IN (:tags)', {
//   replacements: { tags: ['life', 'travel'] },
//   type: QueryTypes.SELECT,
// });

// console.log('结果：', projects);

// // 通配符查询
// import { QueryTypes } from 'sequelize';

// const projects = await sequelize.query('SELECT * FROM `todo` WHERE `content` LIKE :content', {
//   replacements: { content: '%to%' },
//   type: QueryTypes.SELECT,
// });

// console.log('结果：', projects);

// 数组绑定（:name 替换）
import { QueryTypes } from 'sequelize';

const projects = await sequelize.query('SELECT * FROM `todo` WHERE `id` = $1', {
  bind: ['1'],
  type: QueryTypes.SELECT,
});

console.log('结果：', projects);
