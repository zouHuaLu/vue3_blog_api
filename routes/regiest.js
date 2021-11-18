const express = require('express');
const {checkUsername,insertUser} = require('../controller/column')
const { successData, failData } = require('../model/resData');

const router = express.Router()

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


module.exports =router