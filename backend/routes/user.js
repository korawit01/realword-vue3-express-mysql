const express = require('express');
const {getUser,getProfile, createUser, updateUser} = require('../controllers/userControllers')
const router = express.Router();


router.get(`/getUser`, getUser)
router.get(`/getProfile`, getProfile)
router.post(`/create`, createUser)
router.put(`/update`, updateUser)

module.exports = router