const Course = require('../models/Course')
const {multipleMongooseToObject, mongooseToObject} = require('../../utils/mongoose')

class MeController {

    // [GET] /me/stored-courses
    show(req, res, next) {
        Course.find()
            .then((courses) => {
                res.render('me/stored-courses', {
                    courses: multipleMongooseToObject(courses)
                })
            })
            .catch(next)
    }

    // [GET] /me/trash-courses
    trash(req, res, next) {
        
    }

    // [GET] /me/stored-courses/search
    async search(req, res) {
        console.log()
        const data = await Course.find({
            "$or": [
                {name: {$regex: req.query.keyword}},
                {description: {$regex: req.query.keyword}}
            ]
        })
        
        res.render('me/stored-courses', {
            courses: multipleMongooseToObject(data)
        })
    }
}

module.exports = new MeController
