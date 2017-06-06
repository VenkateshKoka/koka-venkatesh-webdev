/**
 * Created by venkateshkoka on 5/28/17.
 */
(function () {
    angular
        .module('WAM')
        .controller('widgetEditController',widgetEditController);

    function widgetEditController($routeParams, $location, widgetService) {
        var model=this;
        model.userId=$routeParams['userId'];
        model.websiteId=$routeParams['websiteId'];
        model.pageId=$routeParams['pageId'];
        model.widgetId=$routeParams['widgetId'];

        // model.widget=widgetService.findWidgetById(model.widgetId);

            widgetService
                .findWidgetById(model.widgetId)
                .then(renderWidget);

            function renderWidget(widget) {
                model.widget = widget;
                model.name=model.widget.widgetType;
                model.size=model.widget.size;
                model.url=model.widget.url;
                model.width=model.widget.width;
                model.text=model.widget.text;
            }



        model.editHeading=editHeading;
        model.deleteWidget=deleteWidget;
        model.editImage=editImage;
        model.editYouTube=editYouTube;

        function editHeading() {
            var wd={
                _id:model.widget._id,
                widgetType:model.name,
                text:model.text,
                size:model.size,
                pageId:model.widget.pageId
            };
            widgetService.updateWidget(model.widgetId,wd).then(function () {
                $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page/'+model.pageId+'/widget');
            })

        }

        function deleteWidget() {
            widgetService.deleteWidget(model.widgetId).then(function () {
                $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page/'+model.pageId+'/widget');
            })

        }

        function editImage() {
            var wd={
              _id:model.widget._id,
                widgetType:model.name,
                url:model.url,
                width:model.width,
                pageId:model.widget.pageId
            };
            widgetService.updateWidget(model.widgetId,wd).then(function () {
                $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page/'+model.pageId+'/widget');
            })

        }

        function editYouTube() {
            var wd={
                _id:model.widget._id,
                widgetType:model.name,
                url:model.url,
                width:model.width,
                pageId:model.widget.pageId
            };
            widgetService.updateWidget(model.widgetId,wd).then(function () {
                $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page/'+model.pageId+'/widget');
            })

        }
    }
})();