
// var chai = require('chai');
// var assert = chai.assert;
// var addWord = require('./main').addWord;
// var lookItUp = require('/main').lookItUp;

// describe("Create a dictionary that has words and their definitions", function(){
//     it("should add a word and a definition tied to that word", function(){
//         assert.equal(JSON.stringify(addWord('cat',"a dumb animal")), JSON.stringify({cat: 'a dumb animal'}) )
//     })
//     it("Should return the definition of a word we give", function(){
//         assert.equal(lookItUp('cat'), 'a feline')
//     })
//     it("Should not allow plurals of the same word", function(){
//         assert.equal(addWord('cats', 'a similar animal'),)
//     })
// })


var chai = require('chai');
var assert = chai.assert;
var addWord = require('./app').addWord;
var lookItUp = require('./app').lookItUp;

describe("Create a dictionary that contains words and their definitions", function(){
    it("Should add a word and a definition for that word", function(){
        assert.equal(addWord('cat', 'a dumb animal'), 'a dumb animal' )
    })
    it("Should return the definition of a word we give", function(){
        assert.equal(lookItUp('cat'), 'a dumb animal')
    })
    it("Should not allow plurals of the same word", function(){
        assert.equal(addWord('zebras', 'a similar animal'), "plurals not allowed")
    })
})