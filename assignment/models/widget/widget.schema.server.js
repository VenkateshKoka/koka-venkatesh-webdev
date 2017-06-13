/**
 * Created by venkateshkoka on 6/11/17.
 */

var mongoose = require('mongoose');

var widgetSchema = mongoose.Schema({
    _page : {type:mongoose.Schema.Types.ObjectId, ref:"GraduatePageModel"},
    type : {type:String,enum :['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'INPUT','TEXT']},
    name : String,
    text : String,
    placeholder : String,
    description : String,
    url : String,
    width : String,
    height : String,
    rows : {type: Number,default: 1},
    size : Number,
    class : String,
    icon : String,
    deletable : Boolean,
    formatted : Boolean,
    dateCreated: {type: Date, default: Date.now},
    position: Number
},{collection:'graduate_widget'});

module.exports = widgetSchema;
