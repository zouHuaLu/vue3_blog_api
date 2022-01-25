const express = require('express')
const { successData, failData } = require("../model/resData");
const { login,addArticle,getAllArticles,deleteArticle} = require('../controller/puiblish');
const res = require('express/lib/response');

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
    const result = await addArticle(req.body).then(() => {
        return successData('msg','发表成功')
    }).catch(err => {
        return failData(err)
    })
    res.send(result)
})

router.get('/getAllArticles',async(_,res)=>{
    const result = await getAllArticles().then((data)=>{
        return successData('list',data)
    }).catch(err=>{
        return failData(err)
    })
    res.send(result)
})

router.post('/deleteArticle',async(req,res)=>{
    const result = await deleteArticle(req.body.id).then(()=>{
        return successData('msg','删除成功')
    }).catch(err => {
        return failData(err)
    })
    res.send(result)
})


module.exports = router