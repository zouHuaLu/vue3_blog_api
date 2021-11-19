# 开发记录

## 2021-11-19 基于JWT的token权限验证

1. 安装并导入`jsonwebtoken`包

2. 在`/config/token_config.js`文件中设置JWT相关配置

3. 在`/utils/token.js`中引入配置文件`token_config.js`并实现具体方法

    3.1 包装`setToken`方法使用`jwt.sign`方法生成token并返回

    3.2 包装`getToken`方法使用`jwt.verify`方法解析token并返回解析后的数据，`jwt.verify`报错说明**Token过期或者是伪造**，不报错说明Token正确

4. 返回的Token前端需要保存在请求头`Authorization`中，在需要鉴权的地方带上这个请求头，用来鉴权

5. 服务器端可以通过`req.headers.authorization`来请求头中`Authorization`的数据
