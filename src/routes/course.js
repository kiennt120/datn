const express = require('express')
const router = express.Router()
const courseController = require('../app/controllers/CourseController')

// courseController.index
router.get('/create', courseController.create)
router.get('/:slug', courseController.index)
router.get('/', courseController.index)

module.exports = router
