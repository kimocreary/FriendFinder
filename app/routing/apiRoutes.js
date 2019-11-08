var friends = require("../data/friends")
module.exports = function(app) {
    app.get("/api/friends",function(req, res){
        res.json(friends)
    })
    app.post("/api/friends",function(req, res){
       var bestMatch = {
           name: " ",
           photo: " ",
           friendDifference: Infinity,
       }
       var currentFriend = req.body
       console.log(currentFriend)
       var totalScore = 0
       for (let i=0; i< friends.length; i++) {
        var totalScore = 0
           for (let j=0; j< friends[i].score.length; j++) {
            totalScore += Math.abs(friends[i].score[j]-parseInt(currentFriend.score[j]))
           }
           if (totalScore<bestMatch.friendDifference){
               bestMatch.friendDifference = totalScore
               bestMatch.name = friends[i].name
               bestMatch.photo = friends[i].photo
           }
       }
       res.json(bestMatch)
    })
}