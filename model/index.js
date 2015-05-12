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

        this.option('generate-controller', {
            desc: 'Whether to also generate the controller for this model',
            type: Boolean,
            defaults: false,
            alias: 'controller'
        });
    },

    writing: function () {
        this.fs.copyTpl(
            this.templatePath('./model/model.js'),
            this.destinationPath('./app/models/' + this.name + '.js'),
            {name: this.name}
        );

        if (this.options['generate-controller']) {
            this.composeWith('morest:controller', {
                args: [this.name]
            });
        }
    }
});