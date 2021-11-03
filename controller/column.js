const execSql = require('../mySql/execSql')

const getList = () => {
    const sql = 'select * from table_column'
    return execSql(sql)
}

module.exports = {
    getList
}