var generators = require('yeoman-generator');

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