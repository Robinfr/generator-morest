var Controller = require('morest').Controller;

//Load model
require('./../models/<%= name %>');

var <%= name %>Controller = new Controller({
    model: '<%= name %>',
    availableOperations: [
        'GET_ALL',
        'GET',
        'POST',
        'UPDATE',
        'DELETE'
    ]
});

module.exports = <%= name %>Controller;