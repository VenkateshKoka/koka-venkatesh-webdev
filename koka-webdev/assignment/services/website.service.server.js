const app = require('../../express');

var websites = [
    { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
    { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
    { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem success" },
    { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
    { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
    { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
    { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
];

app.post("/api/assignment/user/:userId/website", createWebsite);
app.get("/api/assignment/user/:userId/website", findAllWebsitesForUser);
app.delete("/api/assignment/user/:userId/website/:websiteId", deleteWebsite);
app.put("/api/assignment/user/:userId/website/:websiteId",updateWebsite);
app.get("/api/assignment/user/:userId/website/:websiteId",findWebsiteById);



function findAllWebsitesForUser(req, res) {
    var results = [];

    for(var v in websites) {
        if(websites[v].developerId === req.params.userId) {
            results.push(websites[v]);
        }
    }

    res.json(results);
}

function createWebsite(req,res) {
    // console.log("reached server");
    var website = req.body;
     website.developerId = req.params.userId;
     website._id = (new Date()).getTime() + "";
     websites.push(website);
     res.json(website);
}

function deleteWebsite(req,res) {

    var websiteId = req.params.websiteId;

    for (var w in websites){
        if(websites[w]._id === websiteId){
            websites.splice(w,1);

            res.send(websites);

        }
    }
}
function findWebsiteById(req,res) {
    var websiteId = req.params.websiteId;
    for (var w in websites){
        if(websites[w]._id === websiteId){
            var website = websites[w];
            res.send(website);

        }
    }
}

function updateWebsite(req,res){
    var website = req.body;
    var websiteId = req.params.websiteId;

    for(var w in websites) {
        if(websites[w]._id === websiteId){
            websites[w] = website;

            res.send(websites[w]);
            return
        }

    }
    res.sendStatus(404);

    // var websiteFound = findWebsiteById(websiteId);
    // websiteFound.name = website.name;
    // websiteFound.description = website.description;
}

