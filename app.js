const express = require('express')
const cors = require('cors'); // 解决跨域
const column = require('./routes/column')

const port = 8082
const apiPath = '/blog/api'
const app = express()
// 配置允许跨域
app.use(cors())
app.use(express.json())

app.use(`${apiPath}/column`,column)
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`服务已启动：127.0.0.1:${port}`))
