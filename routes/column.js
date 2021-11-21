const express = require("express");
const {
  getLatestArticles,
  getLatestShuoShuo,
  getAllArticles,
  getAllShuoShuo,
  insertShuoShuo,
} = require("../controller/column");
const { successData, failData } = require("../model/resData");
// const getData = require('../utils/getData')

const router = express.Router();
// 获取最新文章
router.get("/articlesList", async (req, res) => {
  const result = await getLatestArticles()
    .then((sqlData) => {
      return successData("list", sqlData);
    })
    .catch((err) => {
      return failData(err);
    });
  res.send(result);
});
// 获取所有文章
router.get("/allArticles", async (req, res) => {
  const result = await getAllArticles()
    .then((data) => {
      return successData("list", data);
    })
    .catch((err) => {
      return failData(err);
    });
  res.send(result);
});
// 获取最新说说
router.get("/latestShuoShuo", async (req, res) => {
  const result = await getLatestShuoShuo()
    .then((data) => {
      return successData("list", data);
    })
    .catch((err) => {
      return failData(err);
    });
  res.send(result);
});
// 获取所有说说
router.get("/allShuoShuo", async (req, res) => {
  const result = await getAllShuoShuo()
    .then((data) => {
      return successData("list", data);
    })
    .catch((err) => {
      return failData(err);
    });
  res.send(result);
});

// 发表说说
router.post("/releaseShuoShuo", async (req, res) => {
  const reqData = {
    title: req.body.title,
    content: req.body.desc,
    imgUrl: req.body.img,
    editor: req.body.author,
    timestamp: req.body.timestamp,
  };
  const result = await insertShuoShuo(reqData)
    .then((data) => {
      return successData("data", "发布成功");
    })
    .catch((err) => {
      return failData(err);
    });
  res.send(result);
});

module.exports = router;
