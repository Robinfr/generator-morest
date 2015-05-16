'use strict';

var path = require('path');
var generator = require('yeoman-generator');
var assert = generator.assert;
var helpers = generator.test;
var os = require('os');
var sinon = require('sinon');

describe('morest:app', function () {
    before(function (done) {
        var dummy = generator.Base.extend({
          dummy: function(){}
        });

        helpers.run(path.join(__dirname, '../generators/app'))
            .withGenerators([
                [dummy, 'morest:controller'],
                [dummy, 'morest:model']
            ])
            .withOptions({skipInstall: true})
            .on('end', done);
    });

    it('creates the app files', function () {
        assert.file([
            'package.json',
            '.editorconfig',
            '.jshintrc',
            '.gitignore',
            'server.js'
        ]);
    });
});
