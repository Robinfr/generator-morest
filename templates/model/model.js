var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var <%= modelName %>Schema = new Schema({
    name: {type: String, required: true}
});

module.exports = mongoose.model('<%= modelName %>', <%= modelName %>Schema);