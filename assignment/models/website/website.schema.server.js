/**
 * Created by venkateshkoka on 6/11/17.
 */

var mongoose = require('mongoose');

var websiteSchema = mongoose.Schema({
    _user: {type: mongoose.Schema.Types.ObjectId, ref: "GraduateUserModel"},
    name: String,
    description: String,
    pages: [{type: mongoose.Schema.Types.ObjectId, ref: "GraduatePageModel"}],
    dateCreated: {type: Date, default: Date.now}
}, {collection: 'graduate_website'});

module.exports = websiteSchema;