var generators = require('yeoman-generator');
var path = require('path');
var lodash = require('lodash');

module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);

        this.argument('projectName', {type: String, optional: true, required: false});
    },

    init: function () {
        this.generateController = function () {
            this.composeWith('morest:controller', {
                args: ['bear'],
                options: {'generate-model': true}
            });
        };
    },

    paths: function () {
        this.sourceRoot(path.join(__dirname, '../templates'));
    },

    prompting: function () {
        if (!this.projectName) {
            var done = this.async();
            this.prompt({
                type: 'input',
                name: 'name',
                message: 'Your project name',
                default: this.appname
            }, function (answers) {
                this.appname = lodash.capitalize(lodash.camelCase(answers.name));
                done();
            }.bind(this));
        } else {
            this.appname = lodash.capitalize(lodash.camelCase(this.projectName));
        }
    },

    writing: function () {
        this.fs.copyTpl(
            this.templatePath('*.json'),
            this.destinationPath('.'),
            {
                appName: this.appname
            }
        );

        this.fs.copy(
            this.templatePath('*.js'),
            this.destinationPath('.')
        );

        this.fs.copy(
            this.templatePath('gitignore'),
            this.destinationPath('.gitignore')
        );

        this.generateController();
    },

    install: function () {
        this.npmInstall();
    }
});