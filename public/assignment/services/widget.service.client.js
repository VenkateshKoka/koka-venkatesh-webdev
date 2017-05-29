/**
 * Created by venkateshkoka on 5/28/17.
 */
(function () {
    angular
        .module('WAM')
        .service('widgetService', widgetService);

    function widgetService() {
        this.findWidgetsByPageId = findWidgetsByPageId;
        this.findWidgetById = findWidgetById;
        this.deleteWidget = deleteWidget;
        this.updateWidget=updateWidget;
        this.createWidget = createWidget;

        var widgets = [
            { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
            { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                "url": "http://lorempixel.com/400/200/"},
            { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
            { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E" },
            { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
        ];

        function createWidget(pageId, widget) {
            widget._id=(new Date().getTime())+"";
            widget.pageId=pageId;
            widgets.push(widget);
            return widget;
        }

        function findWidgetsByPageId(pageId) {
            var wd=[];
            for(var w in widgets)
            {
                if(widgets[w].pageId===pageId)
                {
                    wd.push(widgets[w]);
                }
            }
            return wd;
        }

        function findWidgetById(widgetId) {
            for(var w in widgets)
            {
                if(widgets[w]._id===widgetId)
                {
                    return widgets[w];
                }
            }
        }

        function updateWidget(widgetId, widget) {
            var wd=findWidgetById(widgetId);
            var ind=widgets.indexOf(wd);
            widgets[ind]=widget;
        }

        function deleteWidget(widgetId) {
            var wd=findWidgetById(widgetId);
            var ind=widgets.indexOf(wd);
            widgets.splice(ind,1);
        }
    }
})();
