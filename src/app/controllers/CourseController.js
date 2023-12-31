const Course = require('../models/Course')
const {multipleMongooseToObject, mongooseToObject} = require('../../utils/mongoose')

class CourseController {

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

    // [GET] /course/create
    create(req, res, next) {
        res.render('course/create')
    }

    // [POST] /course/store
    store(req, res, next) {
        const course = new Course(req.body)
        course
            .save()
            .then(() => res.redirect('/'))
            .catch(next)
    }

    // [GET] /course/:slug
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then((course) => {
                if (!course) {
                    res.send("Page not found")
                } else {
                    res.render('course/show', {
                        course: mongooseToObject(course),
                    })
                }
            })
            .catch(next)
    }

    // [GET] /course/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) => {
                res.render('course/edit', {
                    course: mongooseToObject(course),
                })
            })
            .catch(next)
    }

    // [PUT] /course/:id
    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored-courses'))
            .catch(next)
    }

    // [DELETE] /course/:id/delete
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CourseController
