
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String,
    google: {
        id:String,
        token:String
    },
    roles : [{type:String, default:'USER', enum :['USER','ADMIN']}],
    email: String,
    websites: [{type: mongoose.Schema.Types.ObjectId, ref: "GraduateWebsiteModel"}],
    dateCreated: {type: Date, default: Date.now}
}, {collection: "graduate_user"});

module.exports = userSchema;