var app = require('../../express');

// var websites = [
//     { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
//     { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
//     { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem success" },
//     { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
//     { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
//     { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
//     { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
// ];

app.post("/api/assignment/user/:userId/website", createWebsiteForUser);
app.get("/api/assignment/user/:userId/website", findAllWebsitesForUser);
app.delete("/api/assignment/user/:userId/website/:websiteId", deleteWebsiteFromUser);
app.put("/api/assignment/user/:userId/website/:websiteId",updateWebsite);
app.get("/api/assignment/user/:userId/website/:websiteId",findWebsiteById);

var websiteModel = require('../models/website/website.model.server');

function findAllWebsitesForUser(req, res) {

    var userId = req.params.userId;
    websiteModel
        .findAllWebsitesForUser(userId)
        .then(function (websites) {
            res.send(websites);
    });

    // for(var v in websites) {
    //     if(websites[v].developerId === req.params.userId) {
    //         results.push(websites[v]);
    //     }
    // }
    //
    // res.json(results);
}

function createWebsiteForUser(req,res) {

    var website = req.body;
    websiteModel
        .createWebsiteForUser(req.params.userId,website)
        .then(function (website) {
            res.send(website);
    })

     // website.developerId = req.params.userId;
     // website._id = (new Date()).getTime() + "";
     // websites.push(website);
     // res.json(website);
}

function deleteWebsiteFromUser(req,res) {

    var websiteId = req.params.websiteId;
    var userId = req.params.userId;
    websiteModel
        .deleteWebsiteFromUser(userId,websiteId)
        .then(function (status) {
            res.send(status);
    })

    // for (var w in websites){
    //     if(websites[w]._id === websiteId){
    //         websites.splice(w,1);
    //
    //         res.send(websites);
    //
    //     }
    // }
}
function findWebsiteById(req,res) {

    var websiteId = req.params.websiteId;
    websiteModel.findWebsiteById(websiteId).then(function (website) {
        res.send(website);
    })

    // for (var w in websites){
    //     if(websites[w]._id === websiteId){
    //         var website = websites[w];
    //         res.send(website);
    //
    //     }
    // }
}

function updateWebsite(req,res){
    var website = req.body;
    var websiteId = req.params.websiteId;

    websiteModel
        .updateWebsite(websiteId,website)
        .then(function (status) {
            res.send(status);
    })

    // for(var w in websites) {
    //     if(websites[w]._id === websiteId){
    //         websites[w] = website;
    //
    //         res.send(websites[w]);
    //         return
    //     }
    //
    // }
    // res.sendStatus(404);

    // var websiteFound = findWebsiteById(websiteId);
    // websiteFound.name = website.name;
    // websiteFound.description = website.description;
}

