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

module.exports = {
    getLatestArticles,getLatestShuoShuo,getAllArticles,getAllShuoShuo
}