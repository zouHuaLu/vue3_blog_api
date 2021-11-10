const express = require('express');
const {getLatestArticles ,getLatestShuoShuo,getAllArticles,getAllShuoShuo} = require('../controller/column')
const { successData, failData } = require('../model/resData')
// const getData = require('../utils/getData')

const router = express.Router()

router.get('/articlesList',async(req,res)=>{
    const result = await getLatestArticles().then(sqlData => {
        return successData('list',sqlData)
    }).catch(err=>{
        return failData(err)
    })
    res.send(result)
})

router.get('/allArticles',async(req,res)=>{
    const result = await getAllArticles().then(data => {
        return successData('list',data)
    }).catch(err => {
        return failData(err)
    })
    res.send(result)
})

router.get('/latestShuoShuo',async(req,res)=>{
    const result = await getLatestShuoShuo().then(data => {
        return successData('list',data)
    }).catch(err => {
        return failData(err)
    })
    res.send(result)
})

router.get('/allShuoShuo',async(req,res)=>{
    const result = await getAllShuoShuo().then(data => {
        return successData('list',data)
    }).catch(err => {
        return failData(err)
    })
    res.send(result)
})

module.exports = router
