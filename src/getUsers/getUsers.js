var request = require("request");
module.exports = function getUsers(callBack){
    request.get("https://www.mysite.com/api/users",function(err,res){
        callBack(JSON.parse(res.body));
    });
}