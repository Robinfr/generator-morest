var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var <%= name %>Schema = new Schema({
    name: {type: String, required: true}
});

module.exports = mongoose.model('<%= name %>', <%= name %>Schema);