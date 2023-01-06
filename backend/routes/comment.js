const express = require('express');
const {getComment, createComment, deleteComment } = require('../controllers/commentControllers')
const router = express.Router();




router.get(`/get`, getComment)
router.post(`/create`, createComment)
router.delete(`/delete`, deleteComment)

module.exports = router