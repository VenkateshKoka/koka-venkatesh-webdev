/**
 * Created by venkateshkoka on 5/28/17.
 */
(function () {
    angular
        .module('WAM')
        .service('widgetService', widgetService);

    function widgetService($http) {
        this.findWidgetsByPageId = findAllWidgetsForPage;
        this.findWidgetById = findWidgetById;
        this.deleteWidget = deleteWidget;
        this.updateWidget=updateWidget;
        this.createWidget = createWidget;
        this.sortingWidget = sortingWidget;

        // var widgets = [
        //     { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
        //     { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        //     { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
        //         "url": "http://lorempixel.com/400/200/"},
        //     { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
        //     { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        //     { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
        //         "url": "https://youtu.be/AM2Ivdi9c4E" },
        //     { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
        // ];

        function createWidget(pageId, widget) {
            var url = "/api/assignment/page/"+pageId+"/widget";
            return $http.post(url,widget)
                .then(function (response) {
                    return response.data;
            })
            // widget._id=(new Date().getTime())+"";
            // widget.pageId=pageId;
            // widgets.push(widget);
            // return widget;
        }

        function findAllWidgetsForPage(pageId) {
            var url = "/api/assignment/page/"+pageId+"/widget";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
            })

            // var wd=[];
            // for(var w in widgets)
            // {
            //     if(widgets[w].pageId===pageId)
            //     {
            //         wd.push(widgets[w]);
            //     }
            // }
            // return wd;
        }

        function findWidgetById(widgetId) {
            var url = "/api/assignment/widget/"+widgetId;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
            })

            // for(var w in widgets)
            // {
            //     if(widgets[w]._id===widgetId)
            //     {
            //         return widgets[w];
            //     }
            // }
        }

        function updateWidget(widgetId, widget) {
            var url = "/api/assignment/widget/"+widgetId;
            return $http.put(url,widget)
                .then(function (response) {
                    return response.data;
            })

            // var wd=findWidgetById(widgetId);
            // var ind=widgets.indexOf(wd);
            // widgets[ind]=widget;
        }

        function deleteWidget(pageId,widgetId) {
            var url = "/api/assignment/page/"+pageId+"/widget/"+widgetId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
            })
            // var wd=findWidgetById(widgetId);
            // var ind=widgets.indexOf(wd);
            // widgets.splice(ind,1);
        }
        function sortingWidget(startIndex,stopIndex,pageId) {
            var url = "/api/assignment/page/"+pageId+"/widget?initial="+startIndex+"&final="+stopIndex;
            return $http.put(url)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();
