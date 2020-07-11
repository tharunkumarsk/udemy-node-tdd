var except = require("chai").except;
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
chai.should();
chai.use(sinonChai);
var request = require("request");


var getUsers = require("../src/getUsers/getUsers");

describe ('GetUsers tests', () => {
    it ('calls  the callBack', () => {
        var spyFn = sinon.spy();
        getUsers(spyFn);
        spyFn.should.have.been.calledOnce;
        
    });
});