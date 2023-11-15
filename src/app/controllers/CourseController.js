const Course = require('../models/Course')
const {multipleMongooseToObject} = require('../../utils/mongoose')

class SiteController {

    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                // courses = courses.map((course) => course.toObject())
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                })
            })
            .catch(next)
    }

    // [GET] /:slug
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController
