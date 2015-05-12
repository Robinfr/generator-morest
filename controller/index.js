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

        this.option('generate-model', {
            desc: 'Whether to also generate the model for this controller',
            type: Boolean,
            defaults: false,
            alias: 'model'
        });
    },

    writing: function () {
        this.fs.copyTpl(
            this.templatePath('./controller/controller.js'),
            this.destinationPath('./app/controllers/' + this.name + '.js'),
            {name: this.name}
        );

        if (this.options['generate-model']) {
            this.composeWith('morest:model', {
                args: [this.name]
            });
        }
    }
});