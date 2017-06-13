/**
 * Created by venkateshkoka on 6/11/17.
 */

var mongoose = require('mongoose');
var widgetSchema = require('./widget.schema.server');
var widgetModel = mongoose.model('GraduateWidgetModel',widgetSchema);
var pageModel = require('../page/page.model.server');

widgetModel.createWidget = createWidget;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;
widgetModel.reorderWidget = reorderWidget;

module.exports = widgetModel;

function updateWidget(widgetId, newWidget) {
     return widgetModel
         .update({_id:widgetId},{$set: newWidget});
}

function findWidgetById(widgetId) {
    return widgetModel
        .findById(widgetId);
}
function deleteWidget(pageId,widgetId) {
    return widgetModel
        .remove({_id : widgetId})
        .then(function (status) {
            return pageModel
                .deleteWidget(pageId,widgetId);
    })
}

function findAllWidgetsForPage(pageId){

    return widgetModel
        .find({_page: pageId})
        .sort({position: 1});
}

function createWidget(pageId, widget) {
    widget._page = pageId;
    return widgetModel.find({_page:pageId})
        .then(function (widgets) {
            widget.position = widgets.length;
            return widgetModel.create(widget)
                .then(function (widget) {
                    pageModel
                        .addWidget(pageId, widget._id)
                    return widget;
                });
        })
}

function reorderWidget(pageId, startIndex, endIndex){
    return widgetModel.find({_page:pageId},function (err, widgets) {
        widgets.forEach(function (widget) {
            if (startIndex < endIndex) {
                if(widget.position === startIndex){
                    widget.position = endIndex;
                    widget.save();
                }
                else if (widget.position > startIndex && widget.position <= endIndex) {
                    widget.position = widget.position - 1;
                }
            } else {
                if (widget.position === startIndex) {
                    widget.position = endIndex;
                    widget.save();
                }
                else if (widget.position < startIndex && widget.position >= endIndex) {
                    widget.position = widget.position + 1;
                    widget.save();
                }
            }
        });
    });
}

