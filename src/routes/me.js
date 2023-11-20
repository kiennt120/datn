const express = require('express')
const router = express.Router()
const meController = require('../app/controllers/MeController')

// meController.index
router.get('/stored-courses', meController.show)
router.get('/stored-courses/search', meController.search)
router.get('/trash-courses', meController.trash)

module.exports = router
