var generators = require('yeoman-generator');
var path = require('path');
var lodash = require('lodash');

module.exports = generators.NamedBase.extend({
    constructor: function () {
        generators.NamedBase.apply(this, arguments);
    },

    default: function(){
        this.name = lodash.capitalize(lodash.camelCase(this.name));
    },


    writing: function () {
        this.fs.copyTpl(
            this.templatePath('./controller.js'),
            this.destinationPath('./app/controllers/' + this.name + '.js'),
            {name: this.name}
        );
    }
});
