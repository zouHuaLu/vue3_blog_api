const express = require('express');
const {checkUsername,insertUser,checkUser} = require('../controller/column')
const { successData, failData } = require('../model/resData');

// token
const tokenJS = require('../utils/token')

const router = express.Router()

// 注册接口
router.post('/register',async (req,res)=>{
    let username = req.body.username
    let password = req.body.password
    const result = await checkUsername(username).then(data=>{
        if(data.length !=0){
            return failData('用户名已存在')
        }else{
            let data = insertUser(username,password).then(()=>{
                return successData('data','注册成功')
            }).catch(err=>{
                return failData(err)
            })
            return data
        }
    }).catch(err=>{
        return failData(err)
    })
    res.send(result)
})

// 登录接口, 返回token jwt
router.post('/login',async (req,res)=>{
    let username = req.body.username
    let password = req.body.password
    const result = await checkUser(username,password).then(data=>{
        if(data.length != 0){
            const rule = {id:data[0].id,name:data[0].username}
            // 生成token
            const token = tokenJS.setToken(rule)
            // 获取token
            // console.log(tokenJS.getToken(token));
            // tokenJS.getToken(token)
            return successData('data','登陆成功',token)
        }else{
            return failData('用户不存在或用户名/密码错误')
        }
    }).catch(err => {
        return failData('查询出错')
    })
    res.send(result)
})

// 待token请求信息
// 接口，验证token，回调
router.get('/current',async (req,res)=>{
    let token = req.headers.authorization
    console.log(token);
    let result = await tokenJS.getToken(token).then(data=>{
        return  successData('data','验证成功',data)
    }).catch((err)=>{
        return failData('无权限/请重新登录')
    })
    console.log(result);
    res.send(result)
})


module.exports =router