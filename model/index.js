var generators = require('yeoman-generator');
var path = require('path');
var lodash = require('lodash');

module.exports = generators.NamedBase.extend({
    paths: function () {
        this.sourceRoot(path.join(__dirname, '../templates'));
    },

    constructor: function () {
        generators.NamedBase.apply(this, arguments);

        this.name = lodash.capitalize(lodash.camelCase(this.name));
    },

    method1: function () {
        console.log(this.name);
    },

    writing: function () {
        this.fs.copyTpl(
            this.templatePath('./model/model.js'),
            this.destinationPath('./app/models/' + this.name + '.js'),
            {modelName: this.name}
        )
    }
});