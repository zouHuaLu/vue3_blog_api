const env = process.env.NODE_ENV

let MYSQL_CONFIG = {}

if(env === 'dev'){
    MYSQL_CONFIG = {
        host:'localhost',   //主机号
        port:'3306',    //数据库端口号
        database:'db2', //数据库名
        user:'root',    //用户名
        password: 'huangjie8499' //密码
    }
}else{
    MYSQL_CONFIG = {
        host:'mysql',   //主机号
        port:'3306',    //数据库端口号
        database:'db2', //数据库名
        user:'root',    //用户名
        password: '123456' //密码
    }
}

module.exports = {MYSQL_CONFIG}