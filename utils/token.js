const jwt = require('jsonwebtoken');
const TOKEN_CONFIG = require('../config/token_config');

const tokenJS = {
    // 加密
    setToken(userInfo) {
        const token = jwt.sign(userInfo, TOKEN_CONFIG.secret, { expiresIn: TOKEN_CONFIG.expiresIn })
        return token
    },

    // 解密
    getToken(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, TOKEN_CONFIG.secret, (err, res) => {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }

}

module.exports = tokenJS