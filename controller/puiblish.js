const execSql = require("../mySql/execSql");

// 发布系统登录
const login = (username,password) =>{
    const sql  = `SELECT * FROM publish_user WHERE username='${username}' AND password = '${password}'`
    return execSql(sql)
}

module.exports = {
    login
}