const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongooseDelete = require('mongoose-delete')
const slug = require('mongoose-slug-generator')

const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        image: { type: String },
        slug: { type: String, slug: 'name' },
    },
    {
        timestamps: true,
    },
);

// Add plugins
mongoose.plugin(slug)
Course.plugin(mongooseDelete, {
    overrideMethods: true,
    deletedAt: true,
})

module.exports = mongoose.model('Courses', Course)
