const execSql = require("../mySql/execSql");

// 发布系统登录
const login = (username, password) => {
    const sql = `SELECT * FROM publish_user WHERE username='${username}' AND password = '${password}'`
    return execSql(sql)
}

const addArticle = (data) => {
    const sql = `INSERT INTO articles (title,content,tag,time,classify) VALUES ('${data.title}','${data.content}','${data.tag}','${data.time}','${data.classify}')`
    return execSql(sql)
}

const getAllArticles = () => {
 const sql = `SELECT * FROM articles ORDER BY _id desc`   
 return execSql(sql)
}

const deleteArticle = (id) => {
    const sql = `DELETE FROM articles WHERE _id='${id}'`
    return execSql(sql)
}

module.exports = {
    login,
    addArticle,
    getAllArticles,
    deleteArticle
}