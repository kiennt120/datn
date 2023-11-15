module.exports = {
    multipleMongooseToObject: function(mongoses) {
        return mongoses.map((mongose) => mongose.toObject())
    },
    mongooseToObject: function(mongose) {
        return mongose ? mongose.toObject() : mongose
    }
}