const execSql = require("../mySql/execSql");

// 获取最新文章
const getLatestArticles = () => {
  const sql = "select * from table_column limit 3";
  return execSql(sql);
};

// 获取所有文章
const getAllArticles = () => {
  const sql = "select * from table_column";
  return execSql(sql);
};

// 获取最新说说
const getLatestShuoShuo = () => {
  const sql = "select * from table_shuoshuo order by _id desc  limit 3";
  return execSql(sql);
};

// 获取所有说说
const getAllShuoShuo = () => {
  const sql = "select * from table_shuoshuo order by _id desc";
  return execSql(sql);
};

// 登录
const checkUsername = (username) => {
  const sql = `SELECT username FROM table_user WHERE username='${username}'`;
  return execSql(sql);
};

// 注册_插入新用户的用户名和密码
const insertUser = (username, pwd) => {
  const sql = `INSERT INTO table_user (username,password) VALUES ('${username}','${pwd}')`;
  return execSql(sql);
};
// 校验权限
const checkUser = (username, pwd) => {
  const sql = `SELECT * FROM table_user WHERE username='${username}' AND password='${pwd}'`;
  return execSql(sql);
};

// 发布说说
const insertShuoShuo = (data) => {
  const sql = `INSERT INTO table_shuoshuo VALUES (0,'${data.title}','${data.content}','${data.imgUrl}','${data.editor}','${data.timestamp}')`;
  return execSql(sql);
};

module.exports = {
  getLatestArticles,
  getLatestShuoShuo,
  getAllArticles,
  getAllShuoShuo,
  insertUser,
  checkUsername,
  checkUser,
  insertShuoShuo,
};
