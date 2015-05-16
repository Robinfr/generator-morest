var generators = require('yeoman-generator');
var path = require('path');
var lodash = require('lodash');

module.exports = generators.NamedBase.extend({
    constructor: function () {
        generators.NamedBase.apply(this, arguments);

        this.option('generate-controller', {
            desc: 'Whether to also generate the controller for this model',
            type: Boolean,
            defaults: false,
            alias: 'c'
        });
    },

    default: function () {
        this.name = lodash.capitalize(lodash.camelCase(this.name));
    },

    writing: function () {
        console.log(this.name);
        this.fs.copyTpl(
            this.templatePath('./model.js'),
            this.destinationPath('./app/models/' + this.name + '.js'),
            {name: this.name}
        );

        if (this.options['generate-controller']) {
            this.composeWith('morest:controller', {
                    args: [this.name]
                },
                {});
        }
    }
});
