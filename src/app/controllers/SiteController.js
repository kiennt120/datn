const Course = require('../models/Course')

class SiteController {

    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                // courses = courses.map((course) => course.toObject)
                res.render('home', courses)
                // res.send(courses)
            })
            .catch(next)
    }

    // [GET] /:slug
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController
