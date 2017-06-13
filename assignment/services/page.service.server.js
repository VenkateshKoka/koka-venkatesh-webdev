var app = require('../../express');

// var pages = [
//     { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
//     { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
//     { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
// ];

app.get("/api/assignment/website/:websiteId/page",findAllPagesForWebsite);
app.post("/api/assignment/website/:websiteId/page",createPage);
app.get("/api/assignment/page/:pageId",findPageById);
app.put("/api/assignment/page/:pageId",updatePage);
app.delete("/api/assignment/website/:websiteId/page/:pageId",deletePage);

var pageModel = require('../models/page/page.model.server');

function findAllPagesForWebsite(req, res) {

    var websiteId = req.params.websiteId;
    pageModel
        .findAllPagesForWebsite(websiteId)
        .then(function (pages) {
            res.send(pages);
    })
}

function createPage(req,res) {

     var page = req.body;

     pageModel
         .createPage(req.params.websiteId,page)
         .then(function (page) {
                res.send(page);
     })
     // page.websiteId = req.params.websiteId;
     // page._id = (new Date()).getTime() + "";
     // pages.push(page);
     // res.json(page);
}

function deletePage(req,res) {

    var pageId = req.params.pageId;
    var websiteId = req.params.websiteId;
    pageModel
        .deletePage(websiteId,pageId)
        .then(function (status) {
        res.send(status);
    })
    // for (var p in pages){
    //     if(pages[p]._id === pageId){
    //         pages.splice(p,1);
    //
    //         res.send(pages);
    //
    //     }
    // }
}
function findPageById(req,res) {
    var pageId = req.params.pageId;
    pageModel
        .findPageById(pageId)
        .then(function (page) {
                res.send(page);
    })
    // for (var p in pages){
    //     if(pages[p]._id === pageId){
    //         var page = pages[p];
    //         res.send(page);
    //
    //     }
    // }
}

function updatePage(req,res){
    var page = req.body;
    var pageId = req.params.pageId;

    pageModel
        .updatePage(pageId,page)
        .then(function (status) {
                res.send(status);
    })
    // for(var p in pages) {
    //     if(pages[p]._id === pageId){
    //         pages[p] = page;
    //
    //         res.send(page[p]);
    //         return;
    //     }
    //
    // }
    // res.sendStatus(404);

    // var websiteFound = findWebsiteById(websiteId);
    // websiteFound.name = website.name;
    // websiteFound.description = website.description;
}