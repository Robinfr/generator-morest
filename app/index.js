var generators = require('yeoman-generator');
var path = require('path');

module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);

        this.argument('appname', {type: String, required: true});
    },

    method1: function () {
        console.log('Method 1 just ran');
    },

    method2: function () {
        console.log('Method 2 just ran');
    },

    paths: function () {
        this.sourceRoot(path.join(__dirname, '../templates'));
    },

    writing: function () {
        this.fs.copyTpl(
            this.templatePath('app.js'),
            this.destinationPath('app.js')
        );
    },

    prompting: function () {
        var done = this.async();
        this.prompt({
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname
        }, function (answers) {
            this.log(answers.name);
            done();
        }.bind(this));
    },

    install: {}
});