var generators = require('yeoman-generator');
var path = require('path');
var lodash = require('lodash');

module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);

        this.argument('projectName', {type: String, optional: true, required: false});
    },

    init: function () {
        this.generateModel = function () {
            this.composeWith('morest:model', {
                    args: ['Bear'],
                    options: {'generate-controller': true}
                },
                {});
        };
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
            this.templatePath('_package.json'),
            this.destinationPath('package.json'),
            {
                appName: this.appname
            }
        );

        this.fs.copy(this.templatePath('*.js'), this.destinationPath('.'));
        this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'));
        this.fs.copy(this.templatePath('editorconfig'), this.destinationPath('.editorconfig'));
        this.fs.copy(this.templatePath('jshintrc'), this.destinationPath('.jshintrc'));

        this.generateModel();
    },

    install: function () {
        this.npmInstall();
    }
});
