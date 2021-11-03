const express = require('express');
const {getList} = require('../controller/column')
const { successData, failData } = require('../model/resData')
const getData = require('../utils/getData')

const router = express.Router()

router.get('/list',async(req,res)=>{
    const result = await getList().then(sqlData => {
        return successData('list',sqlData)
    }).catch(err=>{
        return failData(err)
    })
    res.send(result)
})

module.exports = router
