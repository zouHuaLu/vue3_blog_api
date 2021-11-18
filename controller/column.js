const execSql = require('../mySql/execSql')

const getLatestArticles = () => {
    const sql = 'select * from table_column limit 3'
    return execSql(sql)
}

const getAllArticles = () => {
    const sql = 'select * from table_column'
    return execSql(sql)
}

const getLatestShuoShuo = () => {
    const sql = 'select * from table_shuoshuo limit 3'
    return execSql(sql)
}

const getAllShuoShuo = () => {
    const sql = 'select * from table_shuoshuo'
    return execSql(sql)
}

const checkUsername = (username) => {
    const sql = `SELECT username FROM table_user WHERE username='${username}'`
    return execSql(sql)
}

// 插入新用户的用户名和密码
const insertUser=(username,pwd)=>{
    const sql = `INSERT INTO table_user (username,password) VALUES ('${username}','${pwd}')`
    return execSql(sql)
}

module.exports = {
    getLatestArticles,getLatestShuoShuo,getAllArticles,getAllShuoShuo,insertUser,checkUsername
}