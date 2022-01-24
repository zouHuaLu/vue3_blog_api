const express = require('express')
const { successData, failData } = require("../model/resData");
const { login,addArticle } = require('../controller/puiblish')

const router = express.Router()

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    const result = await login(username, password).then(data => {
        if(data.length === 0){
            return successData('msg','用户不存在')
        }
        return successData('msg', data[0])
    }).catch(err => {
        return failData(err)
    })
    res.send(result)
})

router.post('/addArticle',async(req,res)=>{
    console.log(req.body)
    const result = await addArticle(req.body).then(data => {
        return successData('msg','发表成功')
    }).catch(err => {
        return failData(err)
    })
    res.send(result)
})

module.exports = router