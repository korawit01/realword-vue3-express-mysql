const express = require('express');
const {getPagin,getArticle, createArticle, updateArticle, deleteArticle } = require('../controllers/articleControllers')
const router = express.Router();



router.get(`/getpagin`, getPagin)
router.get(`/get`, getArticle)
router.post(`/create`, createArticle)
router.put(`/update`, updateArticle)
router.delete(`/delete`, deleteArticle)

module.exports = router