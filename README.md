# SeqSS - Sequelize 种子项目

一个使用 Sequelize ORM 和 MySQL 的数据库种子项目，支持 ES 模块语法。

## 功能特点

- 🚀 使用 ES6 模块语法 (import/export)
- 🗄️ 基于 Sequelize ORM 和 MySQL 数据库
- 🌱 数据库种子功能，快速初始化测试数据
- ⚙️ 环境变量配置支持
- 📦 完整的待办事项 (Todo) 模型示例

## 项目结构

```
seqss/
├── src/
│   ├── models/
│   │   └── Todomodels.js      # Todo 模型定义
│   ├── scripts/
│   │   ├── data/
│   │   │   └── init.json      # 种子数据文件
│   │   └── seed.js            # 数据库种子脚本
│   └── utils/
│       └── dbhelp.js          # 数据库连接配置
├── .env                       # 环境变量配置
└── package.json              # 项目依赖和脚本
```

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置数据库

编辑 `.env` 文件，设置你的 MySQL 数据库连接信息：

```
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=seqcurd
PORT=3000
```

### 3. 运行数据库种子

```bash
npm run seed
```

## 模型定义

### Todo 模型

包含以下字段：
- `id`: 主键，自动递增
- `title`: 标题，字符串类型
- `content`: 内容，字符串类型
- `tag`: 标签，字符串类型

## 种子数据

项目包含 5 个示例待办事项：
- 晨跑锻炼 (health)
- 购买耳机 (shopping)
- 阅读小说 (study)
- 规划旅行 (travel)
- 清理桌面 (life)

## 技术栈

- Node.js
- Sequelize ORM
- MySQL2
- ES6 模块
- dotenv (环境变量)

## 许可证

ISC