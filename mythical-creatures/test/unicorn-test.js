var assert = require('chai').assert;
var Unicorn = require('../exercises/unicorn');

describe('Unicorn', function() {

    it.skip('should be a function', function() {
        assert.isFunction(Unicorn);
    });

    it.skip('should instantiate our good friend, Unicorn', function() {
        var unicorn = new Unicorn();

        assert.instanceOf(unicorn, Unicorn);
    });

    it.skip('should have a name', function(){
        var unicorn = new Unicorn('Bree');

        assert.equal(unicorn.name, 'Bree');
    });

    it.skip('should have a different name', function() {
        var unicorn = new Unicorn('Pam');

        assert.equal(unicorn.name, 'Pam');
    });

    it.skip('should have a color', function() {
        var unicorn = new Unicorn('TayTay', 'blue');

        assert.equal(unicorn.color, 'blue');
    });

    it.skip('should be Black as default', function() {
        var unicorn = new Unicorn('Megan The Unicorn');

        assert.equal(unicorn.color, 'Black');
    });

    it.skip('should refute isBlack', function() {
        var unicorn = new Unicorn('Steve', 'red');

        assert.equal(unicorn.isBlack(), false);
    });

    it.skip('should say sparklying stuff', function() {
        var unicorn = new Unicorn('Brenna');

        assert.equal(unicorn.says('Wonderful!'), '**;* Wonderful *;**');
        assert.equal(unicorn.says('Miles Morales is the best Spider-Man!'), '**;* Miles Morales is the best Spider-Man! *;**');
    });
});