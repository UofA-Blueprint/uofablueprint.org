const express = require('express');
//const uploadImageCont = require('../controllers/uploadImage');
const {verifyApiKey} = require('../services/verifyApiKey');
const {upload} = require('../services/uploadImage')
const uploadImageCont = require('../controllers/uploadImage')

const router = express.Router();

//Set storage engine

router.post('/upload', verifyApiKey, upload, uploadImageCont.postImage)

module.exports = router