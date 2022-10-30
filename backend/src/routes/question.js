const express = require ('express')
const questionController = require('../controllers/studentfaq')
const {verifyApiKey} = require('../services/verifyApiKey')
const router = express.Router()

router.get('/', questionController.getAll)
router.get('/:questionId', questionController.getOne)
router.post('/', questionController.create)
router.delete('/:questionId', questionController.delete)
router.put('/:questionId', questionController.update)

module.exports = router
