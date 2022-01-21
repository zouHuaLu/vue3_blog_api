const express = require('express')
const cors = require('cors'); // 解决跨域
const column = require('./routes/column')
const user = require('./routes/user');
const publish = require('./routes/publish')

// 端口号
const port = 8082
const apiPath = '/blog/api'
// 实例化
const app = express()
// 配置允许跨域
app.use(cors())
app.use(express.json())
// post请求解析
app.use(express.urlencoded({ extended: false }))

app.use(`${apiPath}/column`,column)
app.use(`${apiPath}/user`,user)
app.use(`${apiPath}/publish`,publish)

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`服务已启动：127.0.0.1:${port}`))
