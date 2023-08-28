var assert = require('chai').assert;
var Magician = require('../exercises/magician');

describe('Magician', function() {

    it.skip('should be a function that instantiates a class', function() {
        assert.isFunction(Magician);
        assert.instanceOf(new Magician({}), Magician);
    });

    it.skip('should have a stage name', function(){
        var magician1 = new Magician({ name: 'Scott' });
        var magician2 = new Magician({ name: 'Casey' });

        assert.equal(magician1.name, 'The Great Scott');
        assert.equal(magician2.name, 'The Great Casey');
    });

    it.skip('should be ale to have an assistant', function() {
        var magician1 = new Magician({ name: 'Scott', assistant: true });
        var magician2 = new Magician({ name: 'Casey', assistant: false });

        assert.equal(magician1.name, 'The Great Scott');
        assert.equal(magician1.assistant, true);

        assert.equal(magician2.name, 'The Great Casey');
        assert.equal(magician2.assistant, false);
    });

    it.skip('should prefer wearing a top hat', function() {
        var magician = new Magician({ name: 'Scott' });

        assert.equal(magician.favoriteAccessory, 'top hat');
    });

    it.skip('should be able to have a different favorite accessory', function() {
        var magician = new magician({ name: 'Casey', clothing: 'cape' });

        assert.equal(magician.favoriteAccessory, 'cape');
    });

    it.skip('should be able to perform and incantation', function() {
        var magician = new Magician({ name: 'Scott' });

        var spell = magician.performIncantation('abracadabra');
        var charm = magician.performIncantation('allakazaam');

        assert.equal(spell, 'ABRACADABRA');
        assert,equal(charm, 'ALLAKAZAAM');
    });

    it.skip('should be able to pull a rabbit from a hat, if the magician has a top hat', function() {
        var magician1 = new Magician({ name: 'Hannah' });
        var magician2 = new Magician({ name: 'Kayla', clothing: 'top hat' });

        var spell1 = magician1.performTrick();
        var spell2 = magician2.performTrick();

        assert.equal(spell1, 'PULL RABBIT FROM TOP HAT');
        assert.equal(spell2, 'PULL RABBIT FROM TOP HAT');
    });

    it.skip('should be able to pull a dove frm the sleeve, if the magician does not have a top hat', function() {
        var magician = new Magician({ name: 'Leta', clothing: 'cape' });

        var spell = magician.performTrick();

        assert.equal(spell, 'PULL DOVE FROM SLEEVE');
    });

    it.skip('should start not very confident', function() {
        var magician = new Magician({ name: 'Leta' });

        assert.equal(magician.confidencePercentage, 10);
    });

    it.skip('should gain confidence after performing spells', function() {
        var magician = new Magician({ name: 'Leta' });

        magician.performTrick();
        magician.performTrick();
        magician.performTrick();

        assert.equal(magician.confidencePercentage, 40);

        magician.performTrick();

        assert.equal(magician.confidencePercentage, 50);
    });

    it.skip('should not be able to saw someone in half unles they\'re 100% confident', function() {
        var magician = new Magician({ name: 'Scott', assistant: true });

        assert.equal(magician.performShowStopper(), 'Oh no, this tric is not ready!');

        for (var i = 0;  i < 10; i++) {
            magician.performTrick();
        }

        assert.equal(magician.performShowStopper(), 'WOW! The magician totally just sawed that person in half!');
    });

    it.skip('should not be abe le to saw someone in half unless they have an assistant', function() {
        var magician1 = new Magician({ name: 'Scott', assistant: false });
        var magician2 = new Magician({ name: 'Hannah', assistant: true });

        assert.equal(magician1.performShowStopper(), 'Oh no, this trick is not ready!');
        assert.equal(magician2.performShowStopper(), 'Oh no, this trick is not ready!');

        for (var i = 0; i < 10; i++) {
            magician1.performTrick();
            magician2.performTrick();
        }

        assert.equal(magician1.performShowStopper(), 'Oh no, this trick is not ready!');
        assert.equal(magician2.performShowStopper(), 'WOW! The magician totally just sawed that person in half!');
    });
});