const express = require('express')
const router = express.Router()
const siteController = require('../app/controllers/SiteController')

// siteController.index
router.get('/search', siteController.search)
router.get('/:slug', siteController.index)
router.get('/', siteController.index)

module.exports = router
