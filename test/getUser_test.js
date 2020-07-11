var except = require("chai").except;
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
chai.should();
chai.use(sinonChai);
var request = require("request");


var getUsers = require("../src/getUsers/getUsers");
const Sinon = require("sinon");

describe ('GetUsers tests', () => {
    var spyFn;

    beforeEach(function(){
        spyFn = sinon.spy();
        sinon.stub(request ,"get").callsFake(function(url,callback){
            callback({},{body:{users :["Tharun","Jeevitha"]}});
        });
    })

    afterEach(function(){
        sinon.restore();
    })
    it ('calls  the callBack', () => {
       
        getUsers(spyFn);
        spyFn.should.have.been.calledOnce;
        
    });

    it ('Calls the corret URL', () => {
        var spyFn = sinon.spy();
        getUsers(spyFn);
        request.get.should.have.been.calledOnceWith("https://www.mysite.com/api/users");
    });
});